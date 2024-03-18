const express = require('express');

//creating a new express appliaction

const app = express();

app.get("/", (req,res) => {   // req object represent the http request and has properties for the request quesry string , parameteres,body,http headers etc.
    res.send("hello from the express");
});

app.get('/about',(req,res)=>{
    res.send("this is the about page in express js");
});

//API
//get - read data //post - create data //put - update data //delete - delete data

app.listen(3000,()=> {
    console.log("listening the port at 3000");
});


