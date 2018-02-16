'use strict';

function List() {
  for(let idx in arguments) {
    this[idx] = arguments[idx];
  }
  this.length = arguments.length;
}

List.prototype.copy = function() {
  let copy = new List();
  for (let prop in this) {
    copy[prop] = this[prop];
  }
  return copy;
}

List.prototype.push = function(value) {
  let copy = this.copy();
  copy[copy.length++] = value;
  return copy;
}

List.prototype.pop = function() {
  let popped = this[this.length -1];
  delete this[this.length-1];
  return popped;
}

var list = new List(10, 20, 30);
var copiedlist = list.copy();
var pushedList = list.push(40);
var poppedList = list.pop();

console.log('My constructed list: ', list);
console.log('My copied list: ', copiedlist);
console.log('My pushed list: ', pushedList);
console.log('My popped list: ', poppedList);