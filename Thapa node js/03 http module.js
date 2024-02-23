const http = require("http");  // to use the http server feature we have to require the http module 

const server = http.createServer((req,res)=>{  //create server method takes two parameters .. request and response 
    // res.end("hello from this side ");
    if(req.url = "/"){
        res.end("hello from home side :");
    } else if (req.url = "/about"){
        res.end("hello from about side :");
    }else{
        res.writeHead(404,{"content-type" : "text/html"});  //print error 
        res.end("<h1>404 not found</h1>")
    }
});

server.listen(3000,"127.0.0.1",()=>{                     // server is listening to this port 
    console.log("listening to the server port no 3000");
});

