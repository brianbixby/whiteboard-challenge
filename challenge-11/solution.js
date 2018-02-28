'use strict';

class LinkNode {
  constructor(data, next=null) {
    this.data = data;
    this.next = next;
  }
}

class LinkList {
  constructor(root=null) {
    this.root = root;
  }

  insertFront(data) {
    let node = new LinkNode(data);
    let temp = this.root;
    this.root = node;
    this.root.next = temp;
  }

  isPalindrome() {
    let current = this.root;
    let llArr = [];
    let reversedLLArr = []
    while(current.next !== null) {
      llArr.push(current.data);
      reversedLLArr.unshift(current.data);
      current = current.next;
    }
    llArr.push(current.data);
    reversedLLArr.unshift(current.data);
    for(let i=0, len=llArr.length; i<len; i++ ) {
      if(llArr[i] !== reversedLLArr[i]) {
      return false;
      }
    }
    return true;
  };
}

module.exports = {
  'LinkList': LinkList,
  'LinkNode': LinkNode
};