const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors'); 

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors()); 

// Socket.io connection handling
io.on('connection', socket => {
    console.log('A client connected');

    // Example event handling
    socket.on('chat message', msg => {
        console.log('Message from client:', msg);
        io.emit('chat message', msg); // Broadcast message to all clients
    });
});

// Start server
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
