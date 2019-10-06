const EventEmitter = require('events');

class MyEmitter extends EventEmitter {

};

const myEmitter = new MyEmitter;
const eventName = 'user:event';

myEmitter.on(eventName, (click) => {
  console.log('An user clicked on button', click);
});

// myEmitter.emit(eventName, 'open');
// myEmitter.emit(eventName, 'close');

const stdin = process.openStdin();
stdin.addListener('data', value => {
  console.log(`Você digitou: ${ value.toString().trim() }`)
});