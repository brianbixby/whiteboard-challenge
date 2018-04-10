'use strict';

const BST = require('../solution.js').BST;
const TreeNode = require('../solution.js').TreeNode;

require('jest');

beforeEach(() => {
  const nums = [5, 3, 4, 6];
  this.bst = new BST();
  for (let i of nums) {
    this.bst.insert(new TreeNode(i));
  }
})

afterEach(() => {
  delete this.bst;
})

describe('bst value checker traverse bst', () => {
  it('should return true', () => {
    expect(this.bst.bstValueChecker(6)).toBeTruthy();
  })
});