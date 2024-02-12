// reading a file asynchronously 

const http = require('http');

const fs = require('fs');

const server = http.createServer((req,res)=> {
    if(req.url=="/"){

        //read the file asynchronously

        fs.readFile('reading_file.txt','utf8',(err,data)=>{
            if(err){
                console.error(err);
                return;
            }
            res.writeHead(200,{'Content-Type': 'text/plain'}); // line sets the HTTP status code to 200. HTTP status codes indicate the result of an HTTP request. A status code of 200 means "OK" or "Success." Other codes, such as 404 (Not Found), 500 (Internal Server Error), etc., represent different outcomes. 
            res.end('File Content:'+ data);
        })
    }
});

const port = 3000;
server.listen(port,()=>console.log('Server is running on http://localhost:${port}'));

