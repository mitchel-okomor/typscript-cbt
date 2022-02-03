const socket_io = require('socket.io');
const io = socket_io();
const socketApi:any = {};

socketApi.io = io;

io.on('connection', function(socket:any){
    console.log(socket.id,'A user connected');
});
io.on('message', function(socket:any){
    console.log(socket, 'A user connected');
});
socketApi.sendNotification = function() {
    io.sockets.emit('hello', {msg: 'Hello World!'});
}
export default socketApi;