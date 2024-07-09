const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { Plugin: { Socket } } = require('./src');
const { join } = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

require('dotenv').config();

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Listening on port ${port}`);
    Socket(io);
});
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'public/index.html'));
});