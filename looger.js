// creating a module 
var url = 'http://logger.io/log';
 
function logMessage(message) {
    console.log(message);
}

module.exports.message= logMessage;