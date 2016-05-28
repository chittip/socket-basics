var socket = io();

socket.on("connect", function() {
   console.log("Connted to Server")
});