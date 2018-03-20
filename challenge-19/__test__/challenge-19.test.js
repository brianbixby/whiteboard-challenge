'use strict';

const {Node, Stack} = require('../solution.js');

require('jest');

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
const emptyStack = new Stack();

describe('stack', function() {
  describe('with proper usage', function() {
    it('should return a stack with a node added', function (done) {
      expect(stack.push(6)).toEqual({"next": {"next": {"next": {"next": {"next": {"next": null, "val": 1}, "val": 2}, "val": 3}, "val": 4}, "val": 5}, "val": 6});
      done();
    });
    it('should return the node removed from the stack', function (done) {
      expect(stack.pop()).toEqual({"next": null, "val": 6});
      done();
    });
    it('should return the node top node from the stack', function (done) {
      expect(stack.peek()).toEqual(5);
      done();
    });
    it('should return the node top node from the stack', function (done) {
      expect(stack.min()).toEqual(1);
      done();
    });
  });
  describe('with improper usage', function() {
    it('should throw an error when there is no argument to push to the stack', function(done) {
      expect(() => {
        stack.push();
      }).toThrow();
      done();
    });
    it('should throw an error when you pop with a stack size of 0', function(done) {
      const myStack = new Stack();
      expect(() => {
        myStack.pop();
      }).toThrow();
      done();
    });
    it('should throw an error when you pop with a stack size of 0', function(done) {
      const myStack = new Stack();
      expect(() => {
        myStack.peek();
      }).toThrow();
      done();
    });
    it('should throw an error when you pop with a stack size of 0', function(done) {
      const myStack = new Stack();
      expect(() => {
        myStack.min();
      }).toThrow();
      done();
    });
  });
});
