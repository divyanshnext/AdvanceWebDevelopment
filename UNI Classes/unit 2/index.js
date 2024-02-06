// we are going to import http module  // it comes preinstalled with npm package 

const http = require('http');

const server = http.createServer((req,res) => {     // request will be send by browser & respond will be sen by server 
    res.end('hello, this is my node js server !');
});

const port = 3000; // we are listening to a request to a new port number  

server.listen(port,() => console.log("Server is running on https://localhost:${port}")); // all the request will be listened on 3000 port number 