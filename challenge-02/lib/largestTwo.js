'use strict';

module.exports = function(arr) {
  if(arguments.length !== 1) throw new Error('can only have 1 argument');
  console.log(arguments.length);
  if(arr.length < 2) throw new Error('array length less than 2');
  if(typeof arr === 'object' && arr.constructor !== Array || typeof arr !== 'object') throw new Error('argument data type error');
  arr = arr.sort(arraySort);
  console.log(arr[arr.length-1]);
  return {largest: arr[arr.length-1], secondLargest: arr[arr.length-2]};
}

function arraySort(a, b) {
  return a-b;
}