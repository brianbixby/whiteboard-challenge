'use strict';

class Node {
  constructor(data, next) {
    this.data = data;
    
    this.next = next;
  } 
}
class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(data) {
    if (!data) throw new Error('expected an item to enqueue');
    var node = new Node(data, null);
    if (this.back === null) {
      this.front = this.back = node;
    } else { 
      this.back.next = node; 
      this.back = this.back.next;
    }
    return this;
  }

  dequeue() {
    if (this.front !== null) { 
      var first = this.front;
      this.front = this.front.next; 
      return first.data;
      // return this;
    } else {
      if (this.back !== null) { this.back = null; }
      return 'Cannot dequeue because queue is empty';
    }
  }

  printQueue() {
    console.log(JSON.stringify(this));
    return JSON.stringify(this);
  }
}

module.exports = {
  'Node': Node,
  'Queue': Queue,
}