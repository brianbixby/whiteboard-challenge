// 'use strict';

// module.exports = exports = {};

// class TreeNode  {
//   constructor(val, left=null, right=null) {
//     this.value = val;
//     this.left = left;
//     this.right = right;
//   }
// }

// class BST {
//   constructor(root=null) {
//     this.root = root;
//   }

//   insert(nodeToInsert) {
//     if (this.root === null) {
//       this.root = nodeToInsert;
//     } else {
//       this._insert(this.root, nodeToInsert);
//     }
//   }

//   _insert(root, nodeToInsert) {
//     if (nodeToInsert.value < root.value) {
//       if (!root.left) {
//         root.left = nodeToInsert;
//       } else {
//         this._insert(root.left, nodeToInsert);
//       }
//     } else {
//       if (!root.right) {
//         root.right = nodeToInsert;
//       } else {
//         this._insert(root.right, nodeToInsert);
//       }
//     }
//   }

//   closestVal(val) {
//     if(!val) throw new Error('Bst needs a value to compare to');
//     let q = [this.root];
//     let current, diff, found, closest;

//     while(q.length && !found) {
//       current = q.pop();
//       if(current === val) {
//         found=true;
//         return closest = current.val;
//       }
//       if(current) {
//         let currentDiff =  Math.abs(val - current.val);
//         if(!diff || currentDiff < diff) {
//           diff = currentDiff;
//           closest = current.val;
//         }
//         if (current.left) q.unshift(current.left);
//         if(current.right) q.unshift(current.right)
//       }
//     }
//     return closest;
//   }
// }

'use strict';

exports.TreeNode = class {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

exports.BST = class {
  constructor() {
    this.root = null;
  }

  insert(myNode ) {
    // let myNode = new Node(val);
    this.root ? this._insert(myNode, this.root) : this.root = myNode;
  }

  _insert(node, root) {
    if(node.val >root.val) {
      root.right ? this._insert(node, root.right) : root.right = node;
    } else {
      root.left ? this._insert(node, root.left) : root.left = node;
    }
  }

  closestVal(val) {
    if(!val) throw new Error('Bst needs a value to compare to');
    let q = [this.root];
    let current, diff, found, closest;

    while(q.length && !found) {
      current = q.pop();
      if(current === val) {
        found=true;
        return closest = current.val;
      }
      let currentDiff =  Math.abs(val - current.val);
      if(!diff || currentDiff < diff) {
        diff = currentDiff;
        closest = current.val;
      }
      if (current.left) q.unshift(current.left);
      if(current.right) q.unshift(current.right)
    }
    return closest;
  }
}

// let mybst = new BST();
// mybst.insert(100);
// mybst.insert(50);
// mybst.insert(150);
// mybst.insert(25);
// mybst.insert(75);
// mybst.insert(13);
// mybst.insert(37);
// mybst.insert(63);
// mybst.insert(87);
// mybst.insert(125);
// mybst.insert(137);
// mybst.insert(113);
// mybst.insert(175);
// mybst.insert(162);
// mybst.insert(187);
// mybst.insert(100);

// console.log(JSON.stringify(mybst, null, 2));
// console.log(mybst.closestVal(180));

