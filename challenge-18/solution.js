'use strict';

module.exports = exports = {};

exports.map = function(array, callback) {
  if (!Array.isArray(array)) throw new Error('expected array');
  let returnArray = [];
  for(let i=0; i<array.length; i++) {
    returnArray.push(callback(array[i]));
  }
  return returnArray;
};

exports.filter = function(array, callback) {
  if (!Array.isArray(array)) throw new Error('expected array');
  let returnArray = [];
  for(let i=0; i<array.length; i++) {
    if(callback(array[i])) {
      returnArray.push(array[i]);
    }
  }
  return returnArray
};

exports.reduce = function(array, acccumulator, start) {
  if (!Array.isArray(array)) throw new Error('expected array');
  if(!start) start=0;
  let current = start;
  for(let i=0; i<array.length; i++) {
    current = acccumulator(current, array[i]);
  }
  return current;
};

// MAP
// let myArray = [1,2,3,4,5];
// function map(array, callback) {
//   let returnArray = [];
//   for(let i=0; i<array.length; i++) {
//     returnArray.push(callback(array[i]));
//   }
//   return returnArray;
// };

// function testMap(arr) {
//   return map(arr, (element => element*2));
// }
// console.log(testMap(myArray));

// // FILTER
// let myArray0 = [1,2,3,4,5];
// function filter(array, callback) {
//   let returnArray = [];
//   for(let i=0; i<array.length; i++) {
//     if(callback(array[i])) {
//       returnArray.push(array[i]);
//     }
//   }
//   return returnArray
// };

// function testFilter(arr) {
//   return filter(arr, (element => element > 2));
// }
// console.log(testFilter(myArray0));

// // REDUCE
// let myArray1 = [1,2,3,4,5];

// let callback = function(a, b) {
//   return a+b;
// }

// function reduce(array, acccumulator, start) {
//   let current = start;
//   for(let i=0; i<array.length; i++) {
//     current = acccumulator(current, array[i]);
//   }
//   return current;
// };

// function testReduce(arr, cb, start) {
//   if(!start) start=0;
//   return reduce(arr, cb, start);
// };
// console.log(testReduce(myArray1, callback));