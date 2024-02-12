const http = require ('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        fs.readFile('FileSystem/data.json', 'utf8',(err,data) => {
            if(err){
                console.error(err);
                res.writeHead(500,{'content-type': 'text/plain'})
                res.end('internal server error');
                return;
            }
            //set response header
            res.writeHead(200, {'content-type':'application/json'});
            // send JSON data as plain text
            res.end(data);
    // else {
        //   res.writHead(404,{'content-type':'text/plain;});
        //     res.end('not found');
    // }

        });
    }
})
const port = 5000;
server.listen(port,() => console.log('your server is live at: https://localhost$(port)'));

