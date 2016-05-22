'use strict';

var os = require('os');
var nodeStatic = require('node-static');
var http = require('http');
var socketIO = require('socket.io');

var fileServer = new(nodeStatic.Server)();
var app = http.createServer(function(req, res) {
  fileServer.serve(req, res);
}).listen(8080);

var io = socketIO.listen(app);

io.sockets.on('connection', function(socket){
  
  socket.on("message",function(message){
    socket.broadcast.emit("message", message)
  });
  
  socket.on("create or join",function(room){
    var thisRoom = io.sockets.adapter.rooms[room];
    console.log(thisRoom);
    // console.log(Object.keys(thisRoom).length);
    
    if (typeof thisRoom == "undefined" || Object.keys(thisRoom).length === 0) {
      // If there's only one user, let them know they created the room
      socket.join(room);
      socket.emit('created', room, socket.id);
    } else {
      // If there are multiple users, inform the room about the user's entry
      // then inform the user that they entered the room
      io.sockets.in(room).emit('new user joining', room, socket.id);
      socket.join(room);
      socket.emit('you joined', room, socket.id);
    }
    
  });
  
  socket.on("disconnect", function(){
    
  });
  
  
});