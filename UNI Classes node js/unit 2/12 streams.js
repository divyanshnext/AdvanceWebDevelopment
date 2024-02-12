const fs = require('fs');

const readableStreams = fs.createReadStream('example.txt',{encoding: 'utf-8',highWaterMark:64});

readableStreams.on('data',(chunk)=> {
    console.log('Received chunk of data:');
    console.log(chunk);
});

readableStreams.on('end',()=> {
    console.log('Finished reading data from the file.');
});

readableStreams.on('error',(err) => {
    console.error('Error reading data:', err);
});

