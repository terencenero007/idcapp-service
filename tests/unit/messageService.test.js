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
// Validate properties and legth of the title for now
describe('MessageService', function() {
  it('Each message should have "id", "title", "content", "timestamp" properties', function() {
    var messages = messageService.getMessages();
    messages.should.all.include.keys(["id", "title", "content", "timestamp"]);  
  });
  it('Maximum length of title in each message should be 20', function() {
    var maximunTitleLength = 20;
    var messages = messageService.getMessages();
    messages.forEach(function(message) {
      expect(message).to.have.property('title').with.length.of.at.most(maximunTitleLength);
    });
  });
});

