const port = 3030;
const http = require('http');
const socketIo = require('socket.io');
const express = require('express');

const server = http.createServer();
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('new connection');
});

server.listen(port, () => console.log(`server running on port ${port}`));
