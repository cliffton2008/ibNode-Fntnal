var net = require('net')


var EOL = '\0';
var socket = net.connect({
  host: '127.0.0.1',
  port: 4001 })

socket.on('connect', function () {
    console.log("connection successful")
    console.log("...writing ..")
    socket.write('62' + EOL + '0' + EOL)
    socket.write('49' + EOL + '1' + EOL)
    // var tokens = ['62','0'];
    // var msg = tokens.join(EOL) + EOL;
    // socket.write( msg )
    // socket.write('62' + EOL)
  } )

socket.on('error', function (error) {
  console.log(error)
})


socket.on('data', function(data){
  console.log("Raw Data from server ... " + data)
  // addedb by Phage
  var inTokens = data.toString().split(EOL).slice(0, -1);
  console.log("...convert to tokens " + inTokens)

  parseTWStoClientMsg(data);
  socket.end(function() {
    console.log("socket closed");
  })

})

var net = require('net')

var socket = net.connect({
  host: '127.0.0.1',
  port: 4001 })

socket.end(function() {
  console.log('closing socket')
})
