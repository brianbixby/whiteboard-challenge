'use strict';

class Node {
  constructor(val) {
    if (!val) throw new Error('value not provided');
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(val) {
    let node = new Node(val);

    node.next = this.top;
    this.top = node;
    this.size++;
    return this.top;
  }

  pop() {
    if (!this.size) throw new Error('no nodes, size is 0');
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    this.size--;
    return temp;
  }

  peek() {
    if (!this.size) throw new Error('no nodes, size is 0');
    return this.top.val;
  }

  min() {
    if (!this.size) throw new Error('no nodes, size is 0');
    let res = this.top.val;
    let current = this.top;

    while(current !== null) {
      if(current.val < res){
        res = current.val;
      }
      current = current.next;
    }
    return res;
  }
}

module.exports = {
  Node, Stack
}