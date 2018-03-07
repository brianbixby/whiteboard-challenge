'use strict';

module.exports = (arr) => {
  if (!arr) return null;
  if (!Array.isArray(arr)) throw new Error('expected array');
  let largest = 0;
  let current = 0;
  for(let i=0; i<arr.length; i++) {
    if(arr[i] === 1) {
      current++
    }
    else {
      if(current > largest) {
        largest = current;
      }
      current = 0;
    }
  }
  return (largest > current ? largest : current);
}