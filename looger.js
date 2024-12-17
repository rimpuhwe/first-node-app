// creating a module 
const EventEmitter = require('events');
var url = 'http://logger.io/log';
 
class Logger extends EventEmitter{
    logMessage(message) {
        console.log(message);
        //raising an event 
        this.emit('logging',{data:'hey you a so beautiful'})
    }
}

module.exports= Logger;