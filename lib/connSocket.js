

var net = require('net')

var connObj = {
  host: '127.0.0.1',
  port: 4001 }

function createSocket(serverObj) {
  return net.connect(serverObj)
}


function writeSocket(msg) {
  createSocket().write('msg')
}
/* generic version
function writeSocket(msg) {
  createSocket().write('....message....')
}
*/

function request(reqType) {

  socket.on('error', function (error) {
    console.log(error)
  })
  socket.on('data', function(data){
    console.log(data);
    socket.end(function() {
      console.log("socket closed");
    })


}
