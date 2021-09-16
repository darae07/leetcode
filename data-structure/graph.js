// 인접행렬 그래프 - 무향 그래프
class AdjacencyMatrix{
  constructor(v, e, nodes){
    this.vertexes = v;
    this.edges = e;

    this.graph = [];
    for (let i=0; i<v; i++){
      this.graph.push(new Array(v).fill(0)) 
    }
    // 얕은복사로 각 배열이 참조되어 정상작동되지 않음
    // this.graph = new Array(v).fill(Array.prototype.slice.call(new Array(v).fill(0)) );
    if(Array.isArray(nodes)){
      nodes.forEach(node=>{
        this.graph[node[0]][node[1]] = 1;
        // 무향 그래프의 경우 반대 간선도 존재
        this.graph[node[1]][node[0]] = 1;
      })
    }
  }
}

// 인접리스트 - 무향 그래프
class AdjacencyList{
  constructor(v, e, nodes){
    this.vertexes = v;
    this.edges = e;

    this.graph = [];
    for(let i=0; i<v; i++){
      const node = new Node(i);
      this.graph.push(node);
    }
    if(Array.isArray(nodes)){
      nodes.forEach(node => {
        const n = new Node(node[1]);
        let vertex = this.graph[node[0]];
        while(vertex.next){
          vertex = vertex.next;
        }
        vertex.next = n;
        
        // 무향 그래프의 경우 반대 간선도 존재
        const n2 = new Node(node[0]);
        let vertex2 = this.graph[node[1]];
        while(vertex2.next){
          vertex2 = vertex2.next;
        }
        vertex2.next = n2;
      })
    }
  }
}
class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

const graph = new AdjacencyMatrix(4, 5, [[0,1],[0,2],[0,3],[1,2],[2,3]])
const graph2 = new AdjacencyList(4, 5, [[0,1],[0,2],[0,3],[1,2],[2,3]])
console.log(graph2)