const Express = require('express');
let server = Express();

const Gpio = require('onoff').Gpio;
const http = require('http').Server(server);
const io = require('socket.io')(http);
const config = require('./config.json');

server.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


io.on('connection', function(socket){
  console.log('a user connected');
});

let led = new Gpio(config.relays[0].pin_id, 'out'), //#B
  interval;

interval = setInterval(function () { //#C
  var value = (led.readSync() + 1) % 2; //#D
  led.write(value, function() { //#E
    console.log("Changed LED state to: " + value);
  });
}, 500);
