'use strict';

// module.exports = function(ll, nodeVal) {
//   if (!ll || !nodeVal) return null;
//   if (typeof ll !== 'object') throw new Error('expected object');
//   if (typeof nodeVal !== 'number') throw new Error('expected number');
//   if(!ll.next) throw new Error('improper properties, expected next');
//   let current = ll;
//   while(current.next.val !== nodeVal) {
//     current = current.next;
//   }
//   current.next = current.next.next;
//   return ll
// }

module.exports = function(ll, nodeVal) {
    if (!ll || !nodeVal) return null;
    if (typeof ll !== 'object') throw new Error('expected object');
    if (typeof nodeVal !== 'number') throw new Error('expected number');
    if(!ll.next) throw new Error('improper properties, expected next');
    if (l.val === nodeVal) return l.next;
    
    let l = ll;
    
    while (l) {
      if (l.next && l.next.val == nodeVal) {
        l.next = l.next.next;
      } else {
        l = l.next;
      }
    }
    return ll;
  }