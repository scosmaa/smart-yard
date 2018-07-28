const Express = require('express');
let server = Express();
const http = require('http').Server(server);
const io = require('socket.io')(http);

const Gpio = require('onoff').Gpio;
const config = require('./config.json');

server.use(Express.static('public'));

let relays = [];

config.relays.map((item) => {
  let relay = new Gpio(item.pin_id, item.direction);
  relays[item.code] = relay;
  relay.write(1); // RESET
});


io.on('connection', function (socket) {
  //io.emit('config', config);
  console.log('a user connected');
  socket.on('change_value', function (msg) {
    relays[msg.code].write(msg.value, function () {
      io.emit('value_changed', `Changed LED ${msg.code} state to ${msg.value}`);
    });
  });
});

io.on('get_config', function () {
  io.emit('config', config);
});

http.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});