'use strict';

const BST = require('../solution.js').BST;
const TreeNode = require('../solution.js').TreeNode;
const removeNode = require('../solution.js').removeNode;

require('jest');

beforeEach(() => {
  const nums = [1,2,3,4,5,6];
  this.bst = new BST();
  for (let i of nums) {
    this.bst.insert(new TreeNode(i));
  }
})

describe('bst removeNode should return a bst without the selected node', () => {
  it('should a bst without the value', () => {
    expect(this.bst.removeNode(4)).toEqual({"root": {"left": null, "right": {"left": null, "right": {"left": null, "right": {"left": null, "right": {"left": null, "right": null, "value": 6}, "value": 5}, "value": 3}, "value": 2}, "value": 1}});
  })
});