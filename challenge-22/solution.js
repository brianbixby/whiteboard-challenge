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

  // bstValueChecker(val) {
  //   let returnVal = false;
  //   _traverse(this.root);
  //   function _traverse(node) {
  //     console.log('node.val: ', node.value);
  //     if(node.value == val) {
  //       returnVal = true;
  //     }

  //     if (node.left && !returnVal) _traverse(node.left);
  //     if (node.right && !returnVal) _traverse(node.right);
  //   }
  //   return returnVal;
  // }

  bstValueChecker(val) {
    var returnVal = false;
    let q = [this.root];
    let current;
    while(q.length > 0) {
      current = q.pop();
      console.log(current.value);
      console.log(current.val);
      // callback(current);
      if(current.value === val) {
        
        // q = null;
        current = null;
        return returnVal = true;
      }
      if (current.left) q.unshift(current.left);
      if (current.right) q.unshift(current.right);
    }
    return returnVal;
  }
}


