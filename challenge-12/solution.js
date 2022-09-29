'use strict';

// module.exports = linkedList => {
//   if (!linkedList) return null;
//   if (typeof linkedList !== 'object') throw new Error('expected object');

//   var newLL = {next: null};
//   let current = linkedList
//   while(current.next !== null) {
//     if(!current.next) throw new Error('improper properties, expected next');
//     newLL.val = current.val;
//     let newObj = {val: null, next: newLL}
//     newLL = newObj;
//     current = current.next
//   }
//   newLL.val = current.val
//   return newLL; 
// };

module.exports = l => {
    let ll = l;
    let list = null;
    while (ll) {
      list = {val: ll.val, next: list};
      ll = ll.next;
    }
    return list;
};
