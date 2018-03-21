'use strict';

module.exports = function(arr) {
  if (!Array.isArray(arr)) throw new Error('expected array');
  let rowOne = [ 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  let rowTwo = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
  let rowThree = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
  let result = [];

  for(let i=0; i<arr.length; i++) {
    if(rowOne.indexOf(arr[i][0]) > -1) {
      var row = rowOne;
    }
    if(rowTwo.indexOf(arr[i][0]) > -1) {
      row = rowTwo;
    }
    if(rowThree.indexOf(arr[i][0]) > -1) {
      row = rowThree;
    } 
    ab: for(let j=0; j<arr[i].length; j++) {
      if(row.indexOf(arr[i][j]) < 0) {
        break ab;
      }
      else if(j == arr[i].length-1) {
        result.push(arr[i]);
      }
    }
  }
  return result;
};