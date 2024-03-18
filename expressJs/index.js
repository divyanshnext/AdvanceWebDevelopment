const path = require('path'); //path module
const express = require('express');
const app = express();

// console.log(__dirname); // gives same direcory path
// console.log(path.join(__dirname,"../public")); // takes u to desisred directory 

const staticPath = path.join(__dirname,"../public");

//builtin middleware
app.use(express.static(staticPath));

app.get("/", (req,res) => {  
    res.send("hello from the express");
});

app.get('/about',(req,res)=>{
    res.send("this is the about page in express js");
});

app.listen(9000,()=> {
    console.log("listening the port at 9000");
});

