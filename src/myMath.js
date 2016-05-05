/**
 * This file initializes MyMath class
 * MyMath class contains all the mathematical helper functions
 */

// Initialize MyMath class 
var MyMath = function () {};

// Mthod to add given two numbers
MyMath.prototype.add = function(a, b) {
  return a + b;
};

// Mthod to sub given two numbers
MyMath.prototype.sub = function(a, b) {
  return a - b;
};

module.exports = MyMath;