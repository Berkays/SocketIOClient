import SocketIO = require('socket.io-client');
import { Client } from './Client';

console.log("Connecting to server...");

let socket = SocketIO('http://localhost:5000');
let client: Client;

socket.on('connect', onConnectServer);
socket.on('disconnect', onDisconnectServer);

function onConnectServer(): void {
    client = new Client(socket.id);

    console.log("Connected to server:" + client.clientId);
    socket.emit('matchmake', client);
    socket.on('roomJoin', onJoinRoom);

    setTimeout(() => {
        socket.emit('roomLeave');
        socket.removeListener('roomJoin', onJoinRoom);
    }, 2000);
}

function onDisconnectServer(): void {
    console.log("Disconncted from server");
}

function onJoinRoom(roomId: string): void {
    console.log(`Connected to room ${roomId}`);
}