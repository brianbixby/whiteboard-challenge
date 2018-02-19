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

// List.prototype.map = function(callback) {
//   for (let prop in this) {
//     console.log("this    this: ", this[prop]);
//     this[prop] = this[prop].map(callback);
//     // this[prop] = this[prop].map.call(this[prop], callback);
//   }
//   return this;
// }
// return List.prototype.map.call(this, callback);

var list = new List(10, 20, 30);
var copiedlist = list.copy();
var pushedList = list.push(40);
var poppedList = list.pop();
var mapped = list.map(function(n) {return n*2;});

// console.log('My constructed list: ', list);
// console.log('My copied list: ', copiedlist);
// console.log('My pushed list: ', pushedList);
// console.log('My popped list: ', poppedList);
console.log('Mapped: ', mapped);

// .map.call(collection, callback)