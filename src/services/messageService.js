/**
 * This file initializes MessageService class
 * MessageService class contains all the functions to manipulate messages in the system
 */

// Initialize MessageService class 
var MessageService = function () {};

// Load temporary message data
var messages = require('./messages.json');

// Method to fetch all the messages in the system
// Return temporary message data for now
MessageService.prototype.getMessages = function() {
    return messages;
};

module.exports = new MessageService();