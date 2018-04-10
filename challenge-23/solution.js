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
  removeNode(val) {
    let currentNode, parentNode, nextBiggestParentNode=null, found=false, base=[this.root];
    while(base.length > 0 && !found) {
      currentNode = base.pop();
      if(currentNode.value === val) {
        found=true;
        if(!currentNode.left && !currentNode.right) {
          parentNode.right === currentNode ? parentNode.right = null : parentNode.left = null;
        }
        else if(!currentNode.right && currentNode.left) {
          parentNode.right === currentNode ? parentNode.right = currentNode.left : parentNode.left = currentNode.left;
        }
        else if(!currentNode.left && currentNode.right) {
          parentNode.right === currentNode ? parentNode.right = currentNode.right : parentNode.left = currentNode.right;
        }
        else {
          let _traverse = node => {
            if (node.right) {
              nextBiggestParentNode = node;
              _traverse(node.right);
            }
            else {
              currentNode.value = node.value;
              nextBiggestParentNode ? nextBiggestParentNode.right = null : currentNode.left = null;
            }
          }
          _traverse(currentNode.left);
        }
      }
      else {
        parentNode = currentNode;
        val > currentNode.value && currentNode.right ? base.unshift(currentNode.right) : base.unshift(currentNode.left);
      }
    }
    return this;
  }
}

// let bst = new BST();
// const nums = [20,10,5,15,3,7,13,17,30,35,25,23,27,37,36,38];
// function createBst() {
//   for (let i of nums) {
//     bst.insert(new TreeNode(i));
//   }
//   console.log(JSON.stringify(bst, null, 2));
//   bst.removeNode(35);
// }
// createBst();
// console.log(JSON.stringify(bst, null, 2));