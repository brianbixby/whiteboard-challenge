'use strict';

const reverseList = require('../solution.js');
require('jest');

let ll = {val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null }}}};
let notll = {name: 'brian', age: 27, hobbies: 'coding'};

describe('Reverselist', function() {
  describe('with proper usage', function() {
    it('should return a reversed linked list', function (done) {
      expect(reverseList(ll)).toEqual({ val: 4, next: { val: 3, next: { val: 2, next: { next: null, val: 1 } } } });
      done();
    });
  });
  describe('with improper usage', function() {
    it('should return null if the function is called without an argument', function(done) {
      expect(reverseList()).toEqual(null);
      done();
    });
    it('should throw an error when the argument provided is not an object', function(done) {
      expect(() => {
        reverseList([{val: 4, next:3}, {val: 3, next:2}, {val: 2, next:1}, {val: 1, next: null}]);
      }).toThrow();
      done();
    });
    it('should throw an error when the argument does not have a property of next', function(done) {
      expect(() => {
        reverseList(notll);
      }).toThrow();
      done();
    });
  });
});