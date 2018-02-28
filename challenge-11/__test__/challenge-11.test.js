'use strict';

const request = require('superagent');
const {LinkNode, LinkList} = require('../solution.js');
require('jest');

let isAPal = new LinkList();
isAPal.insertFront(1);
isAPal.insertFront(2);
isAPal.insertFront(2);
isAPal.insertFront(1);

let isNotAPal = new LinkList();
isNotAPal.insertFront(4);
isNotAPal.insertFront(3);
isNotAPal.insertFront(2);
isNotAPal.insertFront(1);

describe('Palindrome Function', function() {
  it('should return true when the linked list is a palindrome', function() {
    expect(isAPal.isPalindrome()).toBe(true);
  });
  it('should return false when the linked list is not a palindrome', function() {
    expect(isNotAPal.isPalindrome()).toBe(false);
  });
});