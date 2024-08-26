const EventEmitter = require('events');

// Create an instance of EventEmitter class
const eventEmitter = new EventEmitter();

// Define a handler for the 'greet' event
eventEmitter.on('greet', (name) => {
    setTimeout(() =>{ // added this just to see asynchronous behaviour
        console.log(`Hello, ${name}!`);
    },500)
});

//eventEmitter.on or eventEmitter.addEventListner is same

// Emit the 'greet' event
eventEmitter.emit('greet','Alice');
console.log("Before event");
//Note :- Event listner should be defined in squenece

// Handling Events Once
//If you want to handle an event only once, you can use the once method:

eventEmitter.once('greetOnce',(name) =>{
    console.log(`Hello, ${name}`);
});
eventEmitter.emit('greetOnce','Aman');
eventEmitter.emit('greetOnce','Sarthak'); // this will not picked by listner

//You can remove event listeners using the off (alias for removeListener) or removeAllListeners methods:
const EventGreet = eventEmitter.listeners('greet');
eventEmitter.off('greet',EventGreet[0]); 
eventEmitter.emit('greet','Alice');

// Inheriting from EventEmitter
// You can create custom classes that inherit from EventEmitter to make your objects event-driven:
class MyEmitter extends EventEmitter {};

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
    console.log('An event occurred!');
});

myEmitter.emit('event');

// Event argumnets 
myEmitter.on('eventArgs', (Args) => {
    console.log('An event occurred!');
    console.log("Argument value :" + Args)
});

myEmitter.emit('eventArgs','{Id: 1, Message : "this is event argument as object"}');