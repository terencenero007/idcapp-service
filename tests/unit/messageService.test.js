/**
 * This file contain the testcases for MessageService class
 */

// Load chai library to aseert the testcases
var chai = require('chai');
chai.should();
chai.use(require('chai-things'));
var expect = chai.expect; 

// Load messageService to run the test cases
var messageService = require('../../src/services/messageService');

// test1
// Currently messageService is returning temporary data. 
// Validate number of messages and its property keys
describe('MessageService', function() {
  it('getMessages() should return 2 messages with "id", "title", "content", "timestamp" properties', function() {
    var currentMessageCount = 3;  
    var messages = messageService.getMessages();
    expect(messages).to.have.lengthOf(currentMessageCount);
    messages.should.all.include.keys(["id", "title", "content", "timestamp"]);  
  });
});

