const fs = require("fs");

// fs.writeFile("sample.txt","hello guys this is asynchronously writing in this file in node.js" , (err) => {
// console.log("file writing done");
// console.log(err);
// });

// fs.appendFile("sample.txt"," toh chaliye append krte hai ", (err) => {
//     console.log("appending done");

// });

fs.readFile("sample.txt","utf-8", (err,data) => {
    console.log(data);
    console.log(err);
});


