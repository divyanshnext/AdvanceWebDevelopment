const express = require('express');
const socket = require('socket.io');
const path = require('path');
const app = express();


const server = app.listen(3000);
const io = socket(server);
app.use(express.static(path.join(__dirname)));



io.on('connection', socket => {
    console.log("connected");

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('chat message', msg => {
        io.emit('chat message', msg);
    });
});