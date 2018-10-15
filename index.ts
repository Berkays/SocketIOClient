import SocketIO = require('socket.io-client');
import { Player } from './Player';

console.log("Connecting to server...");

let socket = SocketIO('http://localhost:5000');

let player: Player = {
    id: "1a123kjd",
    name: "berkay",
    connectedRoom:null
};

socket.on('connect', () => {
    console.log("Connected");
    socket.emit('matchmake', player);
    socket.on('onRoomJoin', (roomId: string) => {
        player.connectedRoom = roomId;
        console.log("Joined to room: " + roomId);
    });

    // setTimeout(() => {
    //     socket.emit('roomLeave',player);
    // }, 5000);
});

