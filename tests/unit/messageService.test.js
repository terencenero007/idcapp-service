/**
 * This file contain the testcases for MessageService class
 */

// Load chai library to aseert the testcases
var chai = require('chai');
var expect = chai.expect; 

// Load messageService to run the test cases
var messageService = require('../../src/services/messageService');

// test1
// Currently messageService is returning temporary data. So just test number of items for now
describe('MessageService', function() {
  it('getMessages() should return 2 items', function() {
    var currentMessageCount = 2;  
    var messages = messageService.getMessages();
    expect(messageService.getMessages()).to.have.lengthOf(currentMessageCount); 
  });
});

