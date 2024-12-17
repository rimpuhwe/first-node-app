/* // loading a module 
 const looger = require('./looger');
 // logging module
  looger.message('raissa')
*/
/* path module
const path = require('path');
var pathObj = path.parse(__filename)
console.log(pathObj)
*/
/*OS module
const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log(`total memory:${totalMemory}`);
console.log(`free memory:${freeMemory}`);
*/
/* event module
const EventEmitter = require('events');
const emitter = new EventEmitter();
//register a listener
emitter.on('messagelogged' , function(){
    console.log('a message was logged')  // this will be executed when the event is triggered.  //
})
//raise an event
emitter.emit('messagelogged');
*/
/* //event argument 
const Logger = require('./looger')
const logger = new Logger()
logger.on('logging', e => {
    console.log('successfully', e)
})
logger.logMessage('message');
*/
/*http module
const http = require('http');
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('hello world');
        res.end();
    }
});

server.listen(3000);
console.log('listening on port 3000...');
*/