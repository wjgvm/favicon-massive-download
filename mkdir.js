const fs = require("fs");
const path = require("path");

module.exports = function createdir(subdir, dir) {
    fs.exists(path.join(subdir, dir), exists => {
        exists
            ?
            console.log("The directory already exists") :
            fs.mkdirSync(path.join(subdir, dir), true);
    })
}

// createdir('images', 'tisu')
// original articulo
// Node.js program to demonstrate the
// fs.mkdirSync() method
// const fs = require("fs");
// const path = require("path");
// Using fs.exists() method to
// check that the directory exists or not
// console.log("Checking for directory" 
//         + path.join(__dirname, "Tisu"));
// fs.exists(path.join(__dirname, "Tisu"), exists => {
//   console.log(exists ? "The directory already exists"
//                          : "Not found!");
// });

// Using fs.mkdirSync() method
// to create the directory recursively
// fs.mkdirSync(path.join(__dirname, "Tisu"), true);

// Using fs.exists() method to
// check that the directory exists or not
// fs.exists(path.join(__dirname, "Tisu"), exists => {
//   console.log(exists ? "The directory already exists" 
//                     : "Not found!");
// });