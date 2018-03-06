'use strict';

const {Node, Queue} = require('../solution.js');

require('jest');

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
const emptyQ = new Queue();

describe('queue', function() {
  describe('with proper usage', function() {
    it('should return a queue with a node added', function (done) {
      expect(q.enqueue(5)).toEqual({"front":{"data":1,"next":{"data":2,"next":{"data":3,"next":{"data":4,"next":{"data":5,"next":null}}}}},"back":{"data":5,"next":null}});
      done();
    });
    it('should return a queue with a node removed', function (done) {
      expect(q.dequeue()).toEqual(1);
      expect(q).toEqual({"front":{"data":2,"next":{"data":3,"next":{"data":4,"next":{"data":5,"next":null}}}},"back":{"data":5,"next":null}});
      done();
    });
  });
  describe('with improper usage', function() {
    it('should throw an error when there is no argument to enqueue', function(done) {
      expect(() => {
        emptyQ.enque();
      }).toThrow();
      done();
    });
  });
});