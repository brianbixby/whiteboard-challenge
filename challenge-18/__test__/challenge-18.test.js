'use strict';

const fp = require('../solution.js');

require('jest');

let myArray = [1,2,3,4,5];
let myArray2 = [1,2,3,4,5];
let myArray3 = [1,2,3,4,5];
let notArray = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five' };
let callback = function(a, b) {
  return a+b;
}

describe('fp routes', function() {
  describe('map', () => {
    describe('with proper usage', () => {
      it('should return a new mapped array',  (done) => {
        expect(fp.map(myArray, (element => element*2))).toEqual([ 2, 4, 6, 8, 10 ]);
        done();
      });
    });
    describe('with improper usage', () => {
      it('should throw an error when you map a non-array element', (done) => {
        expect(() => {
          fp.map(notArray, (element => element*2));
        }).toThrow();
        done();
      });
    });
  });

  describe('filter', () => {
    describe('with proper usage', () => {
      it('should return a new filtered array',  (done) => {
        expect(fp.filter(myArray2, (element => element > 2))).toEqual([ 3, 4, 5 ]);
        done();
      });
    });
    describe('with improper usage', () => {
      it('should throw an error when you map a non-array element', (done) => {
        expect(() => {
          fp.filter(notArray, (element => element*2));
        }).toThrow();
        done();
      });
    });
  });

  describe('reduce', () => {
    describe('with proper usage', () => {
      it('should return a new reduced array',  (done) => {
        expect(fp.reduce(myArray3, callback)).toEqual(15);
        done();
      });
    });
    describe('with improper usage', () => {
      it('should throw an error when you map a non-array element', (done) => {
        expect(() => {
          fp.reduce(notArray, callback);
        }).toThrow();
        done();
      });
    });
  });
});
