const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    if (!this.rootNode) {
      this.rootNode = new Node(data);
    } else {
      let curNode = this.rootNode;
      let newNode = new Node(data);
      while (curNode) {
        if (newNode.data < curNode.data) {
          if (!curNode.left) {
            curNode.left = newNode;
            break;
          }
          curNode = curNode.left;
        } else {
          if (!curNode.right) {
            curNode.right = newNode;
            break;
          }
          curNode = curNode.right; 
        }
      }
    }
  }

  has(data) {
    let curNode = this.rootNode;
    while (curNode) {
      if (data === curNode.data) {
        return true;
      }
      if (data < curNode.data) {
        if (!curNode.left) {break;}
        curNode = curNode.left;
      } else {
        if (!curNode.right) {break;}
        curNode = curNode.right;
      }
    }
    return false;
  }

  find(data) {
    let curNode = this.rootNode;
    while (curNode) {
      if (data === curNode.data) {
        return curNode;
      }
      if (data < curNode.data) {
        if (!curNode.left) {break;}
        curNode = curNode.left;
      } else {
        if (!curNode.right) {break;}
        curNode = curNode.right;
      }
    }
    return null;
  }

  remove(data) {
    let curNode = this.rootNode;
    let parentNode = null;
    function replace(parent, data, replacer){
      if (parent) {
        if(parent.left) {
          if (parent.left.data === data) {
            parent.left = replacer;
          }
        } 
        if(parent.right) {
          if (parent.right.data === data) {
            parent.right = replacer;
          }
        } 
      }
    }    
    while (curNode) {
      if (data === curNode.data) {
        if (!curNode.left && !curNode.right) {
          replace(parentNode, data, null);
        } else if (curNode.left && !curNode.right) {
          replace(parentNode, data, curNode.left);
        } else if (!curNode.left && curNode.right) {
          replace(parentNode, data, curNode.right);
        } else {
          let minInRight = curNode.right;
          let parentRight = curNode; 
          while (minInRight.left) {
            parentRight = minInRight;
            minInRight = minInRight.left;
          }
          replace(parentRight, minInRight.data, minInRight.right);
          curNode.data = minInRight.data;
        }
        break;
      }
      if (data < curNode.data) {
        if (!curNode.left) {break;}
        parentNode = curNode;
        curNode = curNode.left;
      } else {
        if (!curNode.right) {break;}
        parentNode = curNode;
        curNode = curNode.right;
      }
    }
    return null;
  }

  min() {
    let curNode = this.rootNode;
    while (curNode.left) {
      curNode = curNode.left;
    }
    return curNode.data;
  }

  max() {
    let curNode = this.rootNode;
    while (curNode.right) {
      curNode = curNode.right;
    }
    return curNode.data;
  }
}

module.exports = {
  BinarySearchTree
};