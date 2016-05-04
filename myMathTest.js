/**
 * This file contain the testcases for MyMath class
 */

// Load chai library to aseert the testcases
var chai = require('chai');
var expect = chai.expect; 

// Load math class to test
var myMath = require('./myMath');

// test1
describe('MyMath', function() {
  it('add() should return 5 for 3 and 2', function() {
    expect(new myMath().add(3, 2)).to.equal(5);
  });
});