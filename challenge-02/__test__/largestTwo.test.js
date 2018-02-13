'use strict';

const largestTwo = require('../lib/largestTwo.js');
require('jest');

describe('largestTwo Module', function() {
  describe('#largestTwo', function() {
    it('should throw argument data type error', function() {
      expect(function() {
        largestTwo({key1: 5})
      }).toThrow();
      expect(function() {
        largestTwo({key1: 5})
      }).toThrow('argument data type error');
    });

    it('should return object', function() {
      var result = largestTwo([3,5,1,10.5]);
      expect(result).toEqual({largest: 10.5, secondLargest: 5});
    });

    it('should throw array length error', function() {
      expect(function() {
        largestTwo([1])
      }).toThrow();
      expect(function() {
        largestTwo([1])
      }).toThrow('array length less than 2');
    });

    it('should throw 1 argument error', function() {
      expect(function() {
        largestTwo([1, 2], [1, 3])
      }).toThrow();
      expect(function() {
        largestTwo([1, 2], [1, 3])
      }).toThrow('can only have 1 argument');
    });
  });
});