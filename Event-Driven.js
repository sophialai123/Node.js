
// Here we require in the 'events' module and save a reference to it in an events variable
let events = require('events');

let listenerCallback = (data) => {
  console.log('Celebrate ' + data);
}

// Create an instance of the EventEmitter class
let myEmitter = new events.EventEmitter();

//Invoke myEmitter‘s .on() method passing in 'celebration' as the event name and listenerCallback as the listener callback function.

myEmitter.on('celebration', listenerCallback);

//Let’s emit a 'celebration' event! Invoke myEmitter‘s .emit() method passing in 'celebration' as the event name and a string of your choice as the second argument.

myEmitter.emit('celebration', 'new change');