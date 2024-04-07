const eventEmitter = require('events');

const myEmitter = new eventEmitter();

myEmitter.on('event', () => {
    console.log('Event has occurred');
}
);

myEmitter.emit('event');