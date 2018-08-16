const Express = require('express');
let server = Express();
const http = require('http').Server(server);
const io = require('socket.io')(http);
const schedule = require('node-schedule');
const sensorLib = require('node-dht-sensor');

const Gpio = require('onoff').Gpio;
const config = require('./config.json');

const weekDays = {
  sun: 0,
  mon: 1,
  tue: 2,
  wed: 3,
  thu: 4,
  fri: 5,
  sat: 6
}

const events = [{
    code: 'area1',
    days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
    startTime: '20:18',
    stopTime: '20:22'
  },
  {
    code: 'area2',
    days: ['mon', 'tue', 'sat'],
    startTime: '20:19',
    stopTime: '21:00'
  }
];

let scheduledJobs = [];

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

function scheduleEvents() {
  events.map(function (event) {
    var startTime = event.startTime.split(':'),
      stopTime = event.stopTime.split(':');
    console.log('startTime', startTime);
    console.log('stopTime', stopTime);
    event.days.map(function (day) {
  
  
      var ruleStart = new schedule.RecurrenceRule();
      ruleStart.dayOfWeek = weekDays[day];
      ruleStart.hour = +startTime[0];
      ruleStart.minute = +startTime[1]
      console.log(ruleStart);
      var jobStart = schedule.scheduleJob(ruleStart, function () {
        console.log('Today is recognized by Rebecca Black!');
        relays[event.code].write(0, function () {
          statuses[event.code].value = 1;
          io.emit('value_changed', statuses[event.code]);
        });
      });
      var ruleStop = new schedule.RecurrenceRule();
      ruleStop.dayOfWeek = weekDays[day];
      ruleStop.hour = +stopTime[0];
      ruleStop.minute = +stopTime[1]
      var jobStop = schedule.scheduleJob(ruleStop, function () {
        console.log('Today is recognized by Rebecca Black!');
        relays[event.code].write(1, function () {
          statuses[event.code].value = 0;
          io.emit('value_changed', statuses[event.code]);
        });
      })
      scheduledJobs.push(jobStart);
      scheduledJobs.push(jobStop);
    });
  });
}

function resetSchedulation() {
  scheduledJobs.map(function (item) {
    item.cancel();
  })
}
resetSchedulation();
scheduleEvents();
io.on('connection', function (socket) {
  //io.emit('config', config);
  console.log('a user connected');
  socket.on('change_value', function (msg) {
    relays[msg.code].write(msg.value, function () {
      statuses[msg.code].value = !!!msg.value;
      io.emit('value_changed', statuses[msg.code]);
    });
  });
  socket.on('add_schedulation', function (msg) {
    events.push(msg);
    console.log(msg);
    resetSchedulation();
    scheduleEvents();
    io.emit('schedulation', events);
  });


  socket.on('get_config', function () {
    io.emit('config', config);
  });
  socket.on('get_schedulation', function () {
    console.log('get_schedulation');
    io.emit('schedulation', events);
  });


  // var rule = new schedule.RecurrenceRule();
  //   rule.minute = 9;

  //   var j = schedule.scheduleJob(rule, function(){
  //     console.log('Today is recognized by Rebecca Black!');
  //     relays['area1'].write(0, function () {
  //       statuses['area1'].value = 1;
  //       io.emit('value_changed', statuses['area1']);
  //     });
  //   });

  //   var rule2 = new schedule.RecurrenceRule();
  //   rule2.minute = 10;

  //   var k = schedule.scheduleJob(rule2, function(){
  //     console.log('Today is recognized by Rebecca Black!');
  //     relays['area1'].write(1, function () {
  //       statuses['area1'].value = 0;
  //       io.emit('value_changed', statuses['area1']);
  //     });
  //   });
});

const button = new Gpio(5, 'in', 'both');

button.watch((err, value) => {
  console.log('value', value);
  io.emit('rain_status', !!!value);
});

var sensorType = 22; // 11 for DHT11, 22 for DHT22 and AM2302
var sensorPin = 21; // The GPIO pin number for sensor signal
if (!sensorLib.initialize(sensorType, sensorPin)) {
  console.warn('Failed to initialize sensor');
}

setInterval(function () {
  var readout = sensorLib.read();
  // console.log(readout);

  io.emit('weather_infos', {
    temperature: readout.temperature,
    humidity: readout.humidity,
  });

  // console.log('Temperature:', readout.temperature.toFixed(1) + 'C');
  // console.log('Humidity:   ', readout.humidity.toFixed(1)    + '%');
}, 2000);

http.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});