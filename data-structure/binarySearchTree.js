class Node {
  constructor(value) {
    this.value = value;
  }
  left = null;
  right = null;
}

class BinarySearchTree {
  constructor(value) {
    if (value) {
      this.root = new Node(value);
    }
  }

  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }
    this.insertNode(value);
  }
  insertNode(value, node = this.root) {
    if (value > node.value) {
      if (node.right) {
        return this.insertNode(value, node.right);
      }
      node.right = new Node(value);
    } else {
      if (node.left) {
        return this.insertNode(value, node.left);
      }
      node.left = new Node(value);
    }
  }
  search(value, node = this.root) {
    if (!node) return;
    if (value > node.value) {
      return this.search(value, node.right);
    }
    if (value < node.value) {
      return this.search(value, node.left);
    }
    return node;
  }
  traverse(){
    const result = [];
    this.traverseNode(result);
    return result;
  }
  traverseNode(result, node = this.root){
    if(!node) return;
    this.traverseNode(result, node.left);
    result.push(node.value)
    this.traverseNode(result, node.right);
  }
}

const tree = new BinarySearchTree();
tree.insert(7)
tree.insert(8)
tree.insert(3)
tree.insert(1)
tree.insert(5)
console.log(tree.traverse())
console.log(tree)