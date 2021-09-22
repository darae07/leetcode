// 그래프의 한 종류: 사이클이 없는 하나의 연결그래프, 방향성이 있는 비순환 그래프의 한 종류.
// 하나의 루트 노드를 가지며 노드는 0개 이상의 자식 노드를 갖고 있다.
// 계층적 관계를 표현하는 비선형 자료구조이다.

class Node{
  constructor(value){
    this.value = value;
    this.children = [];
  }
}

class Tree{
  constructor(value){
    this.root = new Node(value);
  }

  search( value, node = this.root){
    if(node.value === value){
      return node
    }
    if(node.children){
      for(const i=0; i<node.children.length; i++){
        return this.search(value, node.children[i])
      }
    }
  }

  addNode( value, node = this.root){
    const n = new Node(value)
    if(typeof node === 'number'){
      node = this.search(node)
    }
    node.children.push(n);
  }
}

const tree = new Tree(0);
tree.addNode(1)
tree.addNode(2)
console.log(1)
tree.addNode(3, 1)
console.log(tree)