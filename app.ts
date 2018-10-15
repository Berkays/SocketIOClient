import SocketIO = require('socket.io-client');
import { Client } from './Client';

console.log("Connecting to server...");

let socket = SocketIO('http://localhost:5000');

let client: Client;

socket.on('connect', () => {

    client = new Client(socket.id);

    console.log("Connected to server:" + client.clientId);
    socket.emit('matchmake', client.clientId);
    socket.on('roomJoin', joinRoom);
    socket.on('broadcast', roomBroadcast);
    // setTimeout(() => {
    //     socket.emit('roomLeave',player);
    // }, 5000);
});

function joinRoom(roomId: string): void {
    console.log(`Connected to room ${roomId}`);
}

function roomBroadcast(msg: string): void {
    console.log(`Broadcast ${msg}`);
}


