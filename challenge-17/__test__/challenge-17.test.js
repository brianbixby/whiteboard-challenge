'use strict';

const findCon = require('../solution.js');
require('jest');

const nums1 = [1, 1, 0, 1, 1, 1];
const nums2 = [1, 1, 0, 1, 1, 1];
const nums3 = {1:1};

describe('findCon', function() {
  describe('with proper usage', function() {
    it('should return the largest number of consecutive 1s', function (done) {
      expect(findCon(nums1)).toEqual(3);
      done();
    });
  });
  describe('with improper usage', function() {
    it('should return null if the function is called without an argument', function(done) {
      expect(findCon()).toEqual(null);
      done();
    });
    it('should throw an error when there is a data type error with an argument', function(done) {
      expect(() => {
        findCon(nums3);
      }).toThrow();
      done();
    });
  });
});