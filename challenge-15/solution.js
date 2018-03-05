'use strict';

module.exports = function(queue, val) {
  if (!queue || !val) return null;
  if (typeof queue !== 'object') throw new Error('expected object');
  console.log('typeof: ', typeof val);
  if (typeof val !== 'number' && typeof val !== 'string') throw new Error('expected number or string');
  queue[queue.id] = val;
  if(!queue.next) queue.next = 0;
  queue.length++;
  queue.id++;
  return queue;
}