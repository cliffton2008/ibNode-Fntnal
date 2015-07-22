

var net = require('net')
var _ = require('underscore')

var connObj = {
  host: '127.0.0.1',
  port: 5001 }


function testIn(incoming) {
var socket = net.connect(connObj);


socket.write('hi')
socket.on('error', function(error) { return incoming.push(error) } )
       .on('data', function (data) {

         var tokens = data.toString()
         //console.log(tokens);
         return incoming.concat(tokens) } )


}
var b = ['test']
var a = testIn(b)
console.log(a);




//_.forEach(incoming, function(item) { console.log(item) })



// console.log("MSG from server: " + incoming[0])

// socket.on('error', function(error) { incoming.push(error) } )
//       .on('data', function (data) {console.log(data.toString()) } )

var z = [1,2,4]
console.log(z);
//console.log(incoming);
