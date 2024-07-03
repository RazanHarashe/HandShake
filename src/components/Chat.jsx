import React, { useEffect } from 'react';
import socketIOClient from 'socket.io-client';

const Chat = () => {
    useEffect(() => {
        const socket = socketIOClient('http://localhost:8000');  

        // Listen for 'welcome' event from server
        socket.on('welcome', data => {
            console.log('Received from server:', data);
        });

        return () => socket.disconnect();  
    }, []);

    return (
        <div>
            <h1>Socket.io Chat </h1>
            <p>Check console for messages received from the server.</p>
        </div>
    );
};

export default Chat;
