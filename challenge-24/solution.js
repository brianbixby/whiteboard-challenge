'use strict';

module.exports = exports = {};

let TreeNode = class  {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

let BST = class {
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
  
  findNearest(val) {
    let currentNode, nextBiggestParentNode=null, found=false, base=[this.root], returnNode=base[0], diff=val - base[0].value;
    while(base.length > 0 && !found) {
      currentNode = base.pop();
      if(currentNode.value === val) {
        found = true;
        return returnNode = currentNode;
      }
      else {
        // parentNode = currentNode;
        if(val > currentNode.value) {
          if(!currentNode.right || currentNode.value - val > diff) {
            found=true
          }
          else{
            returnNode= currentNode;
            diff = val-currentNode.value;
            base.unshift(currentNode.right);
          } 
        }
        else {
          if(!currentNode.left || currentNode.value - val > diff) {
            found=true
          }
          else{
            returnNode= currentNode;
            diff = val-currentNode.value;
            base.unshift(currentNode.left);
          } 
        }
      }
    }
    return returnNode;
  }
}

let bst = new BST();
const nums = [20,10,5,15,3,7,13,17,30,35,25,23,27,37,36bhgb hh hgfJZjjjjjjjm];
function createBst() {
  for (let i of nums) {
    bst.insert(new TreeNode(i));
  }
  // console.log(JSON.stringify(bst, null, 2));
  // console.log(bst.findNearest(35));
}
createBst();
console.log(bst.findNearest(40));
// console.log(JSON.stringify(bst, null, 2));


// removeNode(val) {
//   let currentNode, nextBiggestParentNode=null, found=false, base=[this.root], returnNode=base[0], diff=val - base[0].value;
//   while(base.length > 0 && !found) {
//     currentNode = base.pop();
//     if(currentNode.value === val) {
//       found = true;
//       return returnNode = currentNode;
//     }
//     else {
//       // parentNode = currentNode;
//       if(val > currentNode.value) {
//         if(!currentNode.right || currentNode.value - val > diff) {
//           found=true
//         }
//         else{
//           returnNode= currentNode;
//           diff = val-currentNode.value;
//           base.unshift(currentNode.right);
//         } 
//       }
//       else {
//         if(!currentNode.left || currentNode.value - val > diff) {
//           found=true
//         }
//         else{
//           returnNode= currentNode;
//           diff = val-currentNode.value;
//           base.unshift(currentNode.left);
//         } 
//       }
//     }
//   }
//   return returnNode;
// }