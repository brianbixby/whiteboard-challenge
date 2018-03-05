'use strict';

class Node {
  constructor(val) {
    if (!val) return new Error('value not provided');
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor(maxSize=1048) {
    this.top = null;
    this.size = 0;
    this.maxSize = maxSize;
  }

  push(val) {
    if(this.size === this.maxSize) throw new Error('stack overflow');
    let node = new Node(val);

    node.next = this.top;
    this.top = node;
    this.size++;
    return this.top;
  }

  pop() {
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    this.size--;
    return temp;
  }

  peek() {
    return this.top;
  }

}

let stack = new Stack();

stack.push(1);
console.log(stack);
stack.push(2);
console.log(stack);
stack.push(3);
console.log(stack);
stack.pop();
console.log(stack);
stack.pop()
console.log(stack);