// writing a file asynchronously 

const http = require('http');

const fs = require('fs');

const server = http.createServer((req,res)=> {
    if(req.url=="/"){

        const message = "hello , this is my node server! ";

        //write the mesaage into file asynchronously

        fs.writeFile('writing_file.txt',message,'utf8',(err)=>{
            if(err){
                console.error(err);
                res.writeHead(500,{'Content-Type': 'text/plain'});
                res.end('Internal Server Error');
                return;
            }
            res.writeHead(200,{'Content-Type': 'text/plain'}); // line sets the HTTP status code to 200. HTTP status codes indicate the result of an HTTP request. A status code of 200 means "OK" or "Success." Other codes, such as 404 (Not Found), 500 (Internal Server Error), etc., represent different outcomes. 
            res.end('File Content:'+ message);
        })
    }
});

const port = 4000;
server.listen(port,()=>console.log('Server is running on http://localhost:${port}'));
