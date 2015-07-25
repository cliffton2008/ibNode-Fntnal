

var net = require('net')
var _ = require('underscore')

var connObj = {
  host: '127.0.0.1',
  port: 5001 }


var socket = net.connect(connObj);

var x = 1;

socket.write('hi')
socket.on('error', function(error) { console.log(error) } )
       .on('data', function (data) {

         console.log(data);
         //incoming.concat(tokens)
         x = x +1;
         socket.end()
         } )


// setTimeout(function() { console.log(x) }, 1000);




//_.forEach(incoming, function(item) { console.log(item) })



// console.log("MSG from server: " + incoming[0])

// socket.on('error', function(error) { incoming.push(error) } )
//       .on('data', function (data) {console.log(data.toString()) } )

// var z = [1,2,4]
// console.log(z);
//console.log(incoming);
