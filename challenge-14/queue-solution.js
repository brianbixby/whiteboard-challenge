'use strict';

class Queue {
  constructor() {
    this.next = null;
    this.length = 0;
  }

  enqueue(val) {
    this[this.length] = val;
    if (!this.next) this.next = 0;
    this.length++;
  }

  dequeue() {
    delete queue[this.next];
    this.length--;
    this.next++;
  }
}

let queue = new Queue();

queue.enqueue(1);
console.log(queue);
queue.enqueue(2);
console.log(queue);
queue.enqueue(3);
console.log(queue);
queue.dequeue();
console.log(queue);
queue.dequeue();
console.log(queue);