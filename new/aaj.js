const express = require('express');
const socketIO = require('socket.io');
const path=require('path');

const app = express();

const server = app.listen(3000,()=>{
    console.log("Server started on port 3000");
});

app.use(express.static(path.join(__dirname)));

const io = socketIO(server);

io.on('connection',(socket)=>{
    console.log("A user connected to the server ");

    socket.on('disconnect',()=>{
        console.log("A usr disconnected from server");
    });
});



