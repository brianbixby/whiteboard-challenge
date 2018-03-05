'use strict';

const addItem = require('../solution.js');
require('jest');

const queue = { 0: 'apple', 1: 'pear', 2: 'banana', next: 0, length: 3, id: 3 };
const notqueue = "0: 'apple', 1: 'pear', 2: 'banana', next: 0, length: 3, id: 3 ";

describe('addItem', function() {
  describe('with proper usage', function() {
    it('should return a queue with a node added', function (done) {
      expect(addItem(queue, 'kiwi')).toEqual({ 0: 'apple', 1: 'pear', 2: 'banana', 3: 'kiwi', next: 0, length: 4, id: 4 });
      done();
    });
  });
  describe('with improper usage', function() {
    it('should return null if the function is called without 2 arguments', function(done) {
      expect(addItem(3)).toEqual(null);
      done();
    });
    it('should throw an error when there is a data type error with an argument', function(done) {
      expect(() => {
        addItem( notqueue, 3);
      }).toThrow();
      done();
    });
  });
});