const Express = require('express');
let server = Express();
const http = require('http').Server(server);
const io = require('socket.io')(http);
const schedule = require('node-schedule');

const Gpio = require('onoff').Gpio;
const config = require('./config.json');

server.use(Express.static('public'));

let relays = [],
    statuses = {};

config.relays.map((item) => {
  let relay = new Gpio(item.pin_id, item.direction);
  relays[item.code] = relay;
  relay.write(1); // RESET
  item.value = false;
  statuses[item.code] = item;
});


io.on('connection', function (socket) {
  //io.emit('config', config);
  console.log('a user connected');
  socket.on('change_value', function (msg) {
    relays[msg.code].write(msg.value, function () {
      statuses[msg.code].value = !!!msg.value;
      io.emit('value_changed', statuses[msg.code]);
    });
  });

  socket.on('get_config', function () {
    io.emit('config', config);
  });

  var rule = new schedule.RecurrenceRule();
    rule.minute = 9;

    var j = schedule.scheduleJob(rule, function(){
      console.log('Today is recognized by Rebecca Black!');
      relays['area1'].write(0, function () {
        statuses['area1'].value = 1;
        io.emit('value_changed', statuses['area1']);
      });
    });

    var rule2 = new schedule.RecurrenceRule();
    rule2.minute = 10;

    var k = schedule.scheduleJob(rule2, function(){
      console.log('Today is recognized by Rebecca Black!');
      relays['area1'].write(1, function () {
        statuses['area1'].value = 0;
        io.emit('value_changed', statuses['area1']);
      });
    });
});


http.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});