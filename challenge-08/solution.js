'use strict';

// function mergeArr(arr1, arr2, sortedArr) {
//   if(!sortedArr) sortedArr = [];
//   if(arr1.length < 1) {
//     arr2.forEach(j => {
//       sortedArr.push(j);
//     });
//     return;
//   }
//   if(arr2.length < 1) {
//     arr1.forEach(j => {
//       sortArr.push(j);
//     });
//     return;
//   }
//   else {
//     if(arr1[0]<= arr2[0]) {
//       sortedArr.push(arr1.shift());
//     }
//     else {
//       sortedArr.push(arr2.shift());
//     }
//     mergeArr(arr1, arr2, sortedArr);
//   }
//   return sortedArr;
// }

function mergeArr(a1, a2) {
    const arr = [];
    let i=0,j=0;
    while (i < a1.length || j <a2.length) {
      if (j == a2.length || a1[i] <= a2[j]) {
        arr.push(a1[i]);
        i++;
      } else {
        arr.push(a2[j]);
        j++;
      }
    }
    return arr;
}
// returns [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 22, 22, 23 ]
mergeArr([1,3,5,7,22],[2,4,6,8,9,10,12,22,23]);