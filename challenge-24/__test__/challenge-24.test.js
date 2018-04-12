'use strict';

const BST = require('../solution.js').BST;
const TreeNode = require('../solution.js').TreeNode;

require('jest');

beforeEach(() => {
  const nums = [ 100, 50, 50, 25, 75, 13, 37, 63, 87, 125, 137, 113, 175, 162, 187, 200 ];
  this.bst = new BST();
  for (let i of nums) {
    this.bst.insert(new TreeNode(i));
  }
})

afterEach(() => {
  delete this.bst;
})

describe('bst closest val', () => {
  it('should return the first closest value to the argument', () => {
    expect(this.bst.closestVal(90)).toEqual(87);
  })
  it('should throw an error if there is no argument value', done => {
    expect(() => {
      this.bst.closestVal();
    }).toThrow();
    done();
  })
});