'use strict';

const keyboardWords = require('../solution.js');

require('jest');

describe('keyboardWords', function() {
  describe('with proper usage', function() {
    it('should return an array of only words written on one row', function (done) {
      expect(keyboardWords([ 'sup', 'dad', 'tree', 'snake', 'pet'])).toEqual(['dad', 'tree', 'pet']);
      done();
    });
  });
  describe('with improper usage', function() {
    it('should throw an error when the input is not an arry', function(done) {
      expect(() => {
        keyboardWords({sup: 'sup', dad: 'dad', tree: 'tree', snake: 'snake', pet: 'pet'});
      }).toThrow();
      done();
    });
  });
});