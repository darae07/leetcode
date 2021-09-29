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
  traverse() {
    const result = [];
    this.traverseNode(result);
    return result;
  }
  traverseNode(result, node = this.root) {
    if (!node) return;
    this.traverseNode(result, node.left);
    result.push(node.value);
    this.traverseNode(result, node.right);
  }
  delete(value) {
    // 삭제할 노드의 부모, 삭제할 노드, 부모로부터의 삭제할 노드의 방향(좌우)
    let [parent, node, direction] = this.findParent(value);
    // 삭제할 노드가 리프인 경우
    if (!node.left && !node.right) {
      parent[direction] = null;

      // 삭제할 노드가 좌우 노드 모두 있거나 루트인 경우
      // 루트인 경우, 한쪽 서브트리만 존재하는 트리의 경우를 대비하여 predecessor, successor 모두 대응
    } else if ((node.left && node.right) || node.value === this.root.value) {
      // predecessor
      if (node.left) {
        let predecessor = node.left;
        let predecessorParent = node;
        let pDirenction = "left";
        while (predecessor.right) {
          pDirenction = "right";
          predecessorParent = predecessor;
          predecessor = predecessor.right;
        }
        node.value = predecessor.value;
        predecessorParent[pDirenction] = null;
        // successor
      } else if (node.right) {
        let successor = node.right;
        let successorParent = node;
        let sDirection = "right";
        while (successor.left) {
          sDirection = "left";
          successorParent = successor;
          successor = successor.left;
        }
        node.value = successor.value;
        successorParen[sDirection] = null;
      }

      // 한쪽 자식만 있는 경우 삭제할 노드 위치에 삭제할 노드의 서브트리를 연결(삭제할 노드의 부모를 이용)
    } else if (node.left) {
      parent[direction] = node.left;
    } else if (node.right) {
      parent[direction] = node.right;
    }
  }
  findParent(value, node = this.root) {
    if (!node) return;
    if (value === this.root.value) {
      return [null, this.root, null];
    }
    if (node.right && node.right.value === value) {
      return [node, node.right, "right"];
    }
    if (node.left && node.left.value === value) {
      return [node, node.left, "left"];
    }
    if (value > node.value) {
      return this.findParent(value, node.right);
    }
    if (value < node.value) {
      return this.findParent(value, node.left);
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(7);
tree.insert(8);
tree.insert(3);
tree.insert(1);
tree.insert(5);
tree.delete(7);
console.log(tree.traverse());
console.log(tree);
