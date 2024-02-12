//creating a node js app

const http = require('http');

const server = http.createServer((req,res) => {    // request done by browser and response by sever  
    res.end("hello,this is your Node.js server!");
});

const port = 3500;
server.listen(port,() => console.log('congrats your first node app : Server is running on http://localhost:${port}'));



