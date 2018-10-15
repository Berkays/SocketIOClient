"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SocketIO = require("socket.io-client");
const Client_1 = require("./Client");
console.log("Connecting to server...");
let socket = SocketIO('http://localhost:5000');
let client;
socket.on('connect', () => {
    client = new Client_1.Client(socket.id);
    console.log("Connected to server:" + client.clientId);
    socket.emit('matchmake', client.clientId);
    socket.on('roomJoin', joinRoom);
    socket.on('broadcast', roomBroadcast);
    // setTimeout(() => {
    //     socket.emit('roomLeave',player);
    // }, 5000);
});
function joinRoom(roomId) {
    console.log(`Connected to room ${roomId}`);
}
function roomBroadcast(msg) {
    console.log(`Broadcast ${msg}`);
}
