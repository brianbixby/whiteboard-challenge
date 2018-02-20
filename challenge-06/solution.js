'use strict';

function missingArr(arr) {
  var start = Date.now();
  let max = Math.max.apply(null, arr);
  let returnArr = [];
  arr.sort(arraySort);
  for(var i=1; i<max; i++) {
    if(arr.indexOf(i) <0) {
      returnArr.push(i);
    }
  }
  return returnArr;
}

function arraySort(a, b) {
  return a-b;
}
// returns [2,3,6];
missingArr([1, 7, 5,4]);