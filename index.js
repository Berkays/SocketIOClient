"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SocketIO = require("socket.io-client");
console.log("Connecting to server...");
let socket = SocketIO('http://localhost:5000');
let player = {
    id: "1a123kjd",
    name: "berkay",
    connectedRoom: null
};
socket.on('connect', () => {
    console.log("Connected");
    socket.emit('matchmake', player);
    socket.on('onRoomJoin', (roomId) => {
        player.connectedRoom = roomId;
        console.log("Joined to room: " + roomId);
    });
    // setTimeout(() => {
    //     socket.emit('roomLeave',player);
    // }, 5000);
});
