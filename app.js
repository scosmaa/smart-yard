const Express = require('express');
let server = Express();
const http = require('http').Server(server);
const io = require('socket.io')(http);


const Gpio = require('onoff').Gpio;
const config = require('./config.json');

server.use(Express.static('public'));


http.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});



// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);


io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('change_value', function(msg){
    led.write(msg, function() {
	io.emit('value_changed', "Changed LED state to: " + msg);
    });
    console.log('message: ' + msg);
  });
});


let led = new Gpio(config.relays[0].pin_id, 'out'), //#B
  interval;

// interval = setInterval(function () { //#C
//   var value = (led.readSync() + 1) % 2; //#D
//   led.write(value, function() { //#E
//     console.log("Changed LED state to: " + value);
//   });
// }, 5000);

led.watch(function (err, value) {
  io.emit('value_changed', "Changed LED state to: " + value);
});
