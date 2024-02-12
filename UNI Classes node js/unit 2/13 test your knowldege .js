const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        fs.readFile("example.txt","utf8",(err,data)=>{
            if(err){
                res.writeHead(500,{"Content-Type":"text/plain"});
                return;
            }

            const writeStream = fs.createWriteStream("example2.txt");
            writeStream.write(data);
            writeStream.end();

            res.writeHead(200,{"Content-Type":"text/plain"});
            res.end("File contents streamed to example2.txt");
        });
    }
    else{
        res.write
    }

        readStream.pipe(writeStream);
        readStream.on('error',(err) => {
            console.error('Error reading file:',err)
        })
    }
})
const readableStreams = fs.readFileSync