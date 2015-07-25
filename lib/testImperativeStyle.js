



var net = require('net')

var cObj = {
  host: '127.0.0.1',
  port: 5001 }




///////////////
// Only 2 arguments are needed
function ibRequest(connObj, message, parseMsg) {
  // do something with the arguments
  var socket  = net.connect(connObj);
  if (message === 'CurrTime') { socket.write(messageType) }
  socket.on('error', function(error) { console.log(error) } )
         .on('data', function (data) {
           parseMsg(data);
           socket.end(function() {
             console.log("socket closed");
           } )
}
