const { join } = require("path");
const { writeFile } = require("fs");

let filePath = join(__dirname, "chirps.json");

let chirps = [
  { 
    author: "The Darkness", 
    body: "I believe in a thing called love" 
  }, 
  { 
    author: "The Darkness", 
    body: "Just listen to the rhythm of my heart" 
  }, 
  { 
    author: "The Darkness", 
    body: "There's a chance we could make it now" 
  }, 
  { 
    author: "The Darkness", 
    body: "We'll be rocking 'til the sun goes down" 
  }, 
  { 
    author: "The Darkness", 
    body: "I believe in a thing called love, hoo-ooh" 
  },
];

writeFile(filePath, JSON.stringify(chirps), (err) => {
  if (err) return console.error(err);

  console.log("Wrote chirps!");
});
