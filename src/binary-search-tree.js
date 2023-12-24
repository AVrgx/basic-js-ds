const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
  }
}


class BinarySearchTree {
  constructor() {
      this.head = null;
  }

  root() {
      return this.head;
  }

  add(data) {
      const node = new Node(data);
      if (!this.head) {
          this.head = node
          return
      }

      let currentNode = this.head
      while (currentNode) {
          if (node.data < currentNode.data) {
              if (!currentNode.left) {
                  currentNode.left = node
                  return
              }
              currentNode = currentNode.left
          } else {
              if (!currentNode.right) {
                  currentNode.right = node
                  return
              }
              currentNode = currentNode.right
          }
      }

  }

  findNode(node, data) {
      if (!node) {
          return null
      }
      if (data === node.data) {
          return node
      } else if (data < node.data) {
          return this.findNode(node.left, data)
      } else return this.findNode(node.right, data)
  }

  has(data) {
      return this.findNode(this.head, data) !== null
  }

  find(data) {
      return this.findNode(this.head, data)
  }


  deleteRecursive(node, data) {
      if (node === null) return node
      if (data < node.data) {
          node.left = this.deleteRecursive(node.left, data)
      } else if (data > node.data)
          node.right = this.deleteRecursive(node.right, data);
      else {
          if (node.left == null)
              return node.right;
          else if (node.right == null)
              return node.left;
          node.data = this.minimumValue(node.right);
          node.right = this.deleteRecursive(node.right, node.data);
      }
      return node;
  }
  minimumValue(node) {
      let minValue = node.data
      while (node.left != null) {
          minValue = node.left.data
          node = node.left
      }
      return minValue
  }
  remove(data) {
      if (this.head === null) return null
      this.head = this.deleteRecursive(this.head, data)
  }

  min() {
      let node = this.head;
      while (node.left) {
          node = node.left;
      }
      return node.data;
  }

  max() {
      let node = this.head;
      while (node.right) {
          node = node.right;
      }
      return node.data;
  }
}

module.exports = {
  BinarySearchTree
};