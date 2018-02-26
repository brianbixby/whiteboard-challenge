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
  
  printList() {
    console.log(JSON.stringify(this));
  }
  
  insertFront(data) {
    let node = new LinkNode(data);
    let temp = this.root;
    this.root = node;
    this.root.next = temp;
  }
}

function findNode(ll, n) {
  let cnt = 0;
  let current = ll.root;
  while(current.next !== null) {
    current = current.next;
    cnt ++;
  }
  if(n>cnt) return 'invalid entry: n must be equal to or shorter than the linked list';
  current = ll.root;
  let returnNodeIndex = cnt -n;
  cnt = 0;
  while(cnt < returnNodeIndex) {
    current = current.next;
    cnt ++;
  }
  return current;
}

let myList = new LinkList();
myList.insertFront(4);
myList.insertFront(3);
myList.insertFront(2);
myList.insertFront(1);
console.log(findNode(myList, 2));