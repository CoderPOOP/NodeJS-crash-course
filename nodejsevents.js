const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

myEmitter.on('WaterFull', () => {
    console.log('Motor band karo!');
    setTimeout(() => {
        console.log('Motor band karo! Nahi to mummy marengi!');
    }, 5000)
});
myEmitter.emit('WaterFull');