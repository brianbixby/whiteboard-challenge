'use strict';

module.exports = exports = {};

exports.TreeNode = class  {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

exports.BST = class {
  constructor(root=null) {
    this.root = root;
  }

  insert(nodeToInsert) {
    if (this.root === null) {
      this.root = nodeToInsert;
    } else {
      this._insert(this.root, nodeToInsert);
    }
  }

  _insert(root, nodeToInsert) {
    if (nodeToInsert.value < root.value) {
      if (!root.left) {
        root.left = nodeToInsert;
      } else {
        this._insert(root.left, nodeToInsert);
      }
    } else {
      if (!root.right) {
        root.right = nodeToInsert;
      } else {
        this._insert(root.right, nodeToInsert);
      }
    }
  }

// breadth first
  returnNodes() {
    const nodeArr = [];
    _traverse(this.root);
    function _traverse(node) {
      nodeArr.push(node.value);
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    }
    return nodeArr;
  }
}