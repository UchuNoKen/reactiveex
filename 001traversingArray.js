// Working with Arrays

// Traversing an Array -----------------------------------------------------------------

// Ex. 1
//  - function to print all the names in an array

function printAllNames() {
  let names = ["Ben", "Jerry", "Matt", "Priya", "Brian"],
    counter;

  for (counter = 0; counter < names.length; counter++) {
    console.log(names[counter]);
  }
}

// Ex. 2
//  - function to print all the names in an array using forEach

function printAllNames() {
  let names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

  names.forEach(name => {
    console.log(name);
  });
}

// Projecting Arrays -----------------------------------------------------------------

// - applying a function to a value and creating a new value is called projection
// - to project one array to another, we apply a projections function to each item in the array,
//   and collect the results in a new array

// Ex. 3
//  - project an array of videos into an array of {id, title} pairs using forEach()

function project() {
  let newReleases = [
      {
        id: 70111470,
        title: "Die Hard",
        boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [4.0],
        bookmark: []
      },
      {
        id: 654356453,
        title: "Bad Boys",
        boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [5.0],
        bookmark: [{ id: 432534, time: 65876586 }]
      },
      {
        id: 65432445,
        title: "The Chamber",
        boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [4.0],
        bookmark: []
      },
      {
        id: 675465,
        title: "Fracture",
        boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [5.0],
        bookmark: [{ id: 432534, time: 65876586 }]
      }
    ],
    videoAndTitlePairs = [];

  // code here
  // Use forEach function to accumulate {id, title} pairs from each video.
  // Put the results into the videoAndTitlePairs array using the Array's
  // push() method. Example: videoAndTitlePairs.push(newItem);

  newReleases.forEach(video => {
    videoAndTitlePairs.push({ id: video.id, title: video.title });
  });

  return videoAndTitlePairs;
}

// Ex. 4
//  - implement map function
//  - add map() to the Array type

Array.map.prototype = projectionFunction => {
  let results = [];
  this.forEach(itemInArray => {
    results.push(projectionFunction(itemInArray));
  });
  return results;
};

// Ex. 5
// - project an array of videos into an array {id, title} pairs
function newReleases() {
  let newReleases = [
    {
      id: 70111470,
      title: "Die Hard",
      boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: [4.0],
      bookmark: []
    },
    {
      id: 654356453,
      title: "Bad Boys",
      boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: [5.0],
      bookmark: [{ id: 432534, time: 65876586 }]
    },
    {
      id: 65432445,
      title: "The Chamber",
      boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: [4.0],
      bookmark: []
    },
    {
      id: 675465,
      title: "Fracture",
      boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: [5.0],
      bookmark: [{ id: 432534, time: 65876586 }]
    }
  ];
  return newReleases.map(video => {
    return { id: video.id, title: video.title };
  });
}
