// creating a module 
var url = 'http://logger.io/log';
 
function logMessage(message) {
    console.log(message);
}
logMessage('hello world')

module.exports.message= logMessage;