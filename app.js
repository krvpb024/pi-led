const Gpio = require('onoff').Gpio
const led = new Gpio(4, 'out')

const interval = setInterval(() => {
  led.writeSync(led.readSync() ^ 1)
})

process.on('SIGINT', function () {
  clearInterval(interval)
  led.writeSync(0)
  led.unexport()
})
