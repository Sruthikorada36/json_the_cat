// const request = require('request');
//  const breedName = process.argv.slice(2);
// const url = ` https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

// const fetchBreedDescription = function(breedName, callback) {
//   request(url, (error, response, body) => {
//     if (error) {
//       return console.log(error);
//     }
//     const data = JSON.parse(body);
//     const breed = data[0];
//     if (breed) {
//       console.log(breed.description);
//     } else {
//       console.log(`Failed to find breed ${breedName}`);
//     }
//   });

// };

// // fetchBreedDescription(breedName);
// module.exports = {fetchBreedDescription};



const request = require("request");

const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (body === "[]") {  //invalid breed
      callback(error, null);
    } else {
      let desc = (JSON.parse(body))[0].description;
      callback(error, desc);
    }
  });
};

module.exports = {fetchBreedDescription};