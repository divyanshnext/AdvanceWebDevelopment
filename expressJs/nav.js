//routing 

// www.sbic.com - welcome to home page
// "/about" - welcome to about page

const express = require('express');
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.write("<h1>welcome to home page<h2>");
    res.write("<h2>welcome to home page again<h2>");
    res.send();
});

app.get("/about",(req,res)=>{
    res.status(200).send("welcome to about page");
});

//JSON  data ko serve kr skte h
app.get("/temp",(req,res)=>{
    res.send({
        id: 1, 
    name:"divyansh",   
});
});


app.listen(port,()=>{
    console.log("listening to server");
});


