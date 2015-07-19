var net = require('net')
var parse = require('./parse_msg.js')
// var colors = require('colors')

var EOL = '\0';
var socket = net.connect({
  host: '127.0.0.1',
  port: 4001 })

socket.on('connect', function () {
    console.log("connection successful")
    console.log("...writing ..")
    socket.write('62' + EOL + '0' + EOL)
    // socket.write('49' + EOL + '1' + EOL)
    // var tokens = ['62','0'];
    // var msg = tokens.join(EOL) + EOL;
    // socket.write( msg )
    // socket.write('62' + EOL)
  } )

socket.on('error', function (error) {
  console.log(error)
})


socket.on('data', function(data){


  parse.parseTWStoClientMsg(data);
  socket.end(function() {
    console.log("socket closed");
  })

})
