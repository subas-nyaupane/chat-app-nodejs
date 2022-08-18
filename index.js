const express = require('express')
const app = express()

app.use(express.static(__dirname));

const server = require('http').createServer(app)

const io = require('socket.io')(server,{ cors:{ origin : "*" }})

const nodemon = require('nodemon');



server.listen(3000, () => {
    console.log('server is running on port', server.address().port);
});

io.on("connection", (socket) => {
    console.log('User Connected..'+ socket.id);
    socket.on('message',(data) => {
        socket.broadcast.emit('message',data);
    });
});