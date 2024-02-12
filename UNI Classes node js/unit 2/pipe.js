const fs = require('fs');

const readableStream = fs.createReadStream('example.txt','utf8');

const writableStream = fs.createWriteStream('destination.txt');

readableStream.pipe(writeableStream)


