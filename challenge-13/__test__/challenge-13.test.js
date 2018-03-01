'use strict';

const removeNode = require('../solution.js');
require('jest');

let ll = {val: 1, next: {val: 2, next: {val: 3, next: { val: 4, next: null }}}}
let notll = {name: 'brian', age: 27, hobbies: 'coding'};

describe('removeNode', function() {
  describe('with proper usage', function() {
    it('should return a link list with a node removed', function (done) {
      expect(removeNode(ll, 2)).toEqual({val: 1, next: {val: 3, next: { val: 4, next: null }}});
      done();
    });
  });
  describe('with improper usage', function() {
    it('should return null if the function is called without 2 arguments', function(done) {
      expect(removeNode(3),).toEqual(null);
      done();
    });
    it('should throw an error when there is a data type error with an argument', function(done) {
      expect(() => {
        removeNode([{val: 4, next:3}, {val: 3, next:2}, {val: 2, next:1}, {val: 1, next: null}], 3);
      }).toThrow();
      done();
    });
    it('should throw an error when the argument does not have a property of next', function(done) {
      expect(() => {
        removeNode(notll, 5);
      }).toThrow();
      done();
    });
  });
});

// {"next": {"next": {"next": {"next": null, "val": 4}, "val": 4}, "val": 3}, "val": 1}