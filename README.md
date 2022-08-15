# [Learn Node](https://nodejs.org/api/)

## The Node REPL

The Node REPL
REPL is an abbreviation for `read–eval–print loop`. It’s a program that loops, or repeatedly cycles, through three different states: a read state where the program reads input from a user, the eval state where the program evaluates the user’s input, and the print state where the program prints out its evaluation to a console. Then it loops through these states again.

When you install Node, it comes with a built-in JavaScript REPL. You can access the REPL by typing the command node (with nothing after it) into the terminal and hitting enter. A > character will show up in the terminal indicating the REPL is running and prompting your input. The Node REPL will evaluate your input line by line.

---
## Accessing the Process Object
In computer science, a process is the instance of a computer program that is being executed.

Node has a global process object with useful methods and information about the current process.

The process.env property is an object which stores and controls information about the environment in which the process is currently running. For example, the process.env object contains a PWD property which holds a string with the directory in which the current process is located. It can be useful to have some if/else logic in a program depending on the current environment— a web application in a development phase might perform different tasks than when it’s live to users. We could store this information on the process.env. One convention is to add a property to process.env with the key NODE_ENV and a value of either production or development.

```
if (process.env.NODE_ENV === 'development'){
  console.log('Testing! Testing! Does everything work?');
}
```

The `process.memoryUsage()` returns information on the CPU demands of the current process. It returns a property that looks similar to this:

```
command: process.memoryUsage()

{
  rss: 33554432,
  heapTotal: 7274496,
  heapUsed: 5913200,
  external: 982722,
  arrayBuffers: 16643
}
```

`process.memoryUsage().heapUsed `will return a number representing how many bytes of memory the current process is using.

```
process.memoryUsage().heapUsed
//return 6629648
```

The` process.argv` property holds an array of command line values provided when the current process was initiated. The first element in the array is the absolute path to Node, which ran the process. The second element in the array is the path to the file that’s running. The following elements will be any command line arguments provided when the process was initiated. Command line arguments are separated from one another with spaces.

```
node myProgram.js testing several features
console.log(process.argv[3]); // Prints 'several'
```
---

## Core Modules and Local Modules

To save developers from having to reinvent the wheel each time, Node has several modules included within the environment to efficiently perform common tasks. These are known as the core modules. The core modules are defined within Node.js’s source and are located in the lib/ folder. Core modules are required by passing a string with the name of the module into the require() function:

`// Require in the 'events' core module:
let events = require('events');`

the process of requiring a local module

```
// dog.js
module.exports = class Dog {
 
  constructor(name) {
    this.name = name;
  }
 
  praise() {
    return `Good dog, ${this.name}!`;
  }
};

 // app.js
let Dog = require('./dog.js');
const tadpole = new Dog('Tadpole');
console.log(tadpole.praise());


```
---
## Event-Driven Architecture

Node is often described as having event-driven architecture

Node provides an EventEmitter class which we can access by requiring in the events core module:


```
// Require in the 'events' core module
let events = require('events');
 
// Create an instance of the EventEmitter class
let myEmitter = new events.EventEmitter();
```

Each event emitter instance has an `.on() method` which assigns a listener callback function to a named event. The `.on() method` takes as its first argument the name of the event as a string and, as its second argument, the listener callback function.

Each event emitter instance also has an `.emit()` method which announces a named event has occurred. The `.emit() `method takes as its first argument the name of the event as a string and, as its second argument, the data that should be passed into the listener callback function. 

```
let newUserListener = (data) => {
  console.log(`We have a new user: ${data}.`);
};
 
// Assign the newUserListener function as the listener callback for 'new user' events
myEmitter.on('new user', newUserListener)
 
// Emit a 'new user' event
myEmitter.emit('new user', 'Lily Pad') //newUserListener will be invoked with 'Lily Pad'
```