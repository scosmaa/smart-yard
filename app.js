const Gpio = require('onoff').Gpio;

let led = new Gpio(4, 'out'), //#B
  interval;

interval = setInterval(function () { //#C
  var value = (led.readSync() + 1) % 2; //#D
  led.write(value, function() { //#E
    console.log("Changed LED state to: " + value);
  });
}, 2000);