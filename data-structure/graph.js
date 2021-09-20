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

// 무방향그래프
class Graph{
  vertexes = {}

  addVertext(value){
    const v = this.vertexes[value];
    if(v){
      console.log('vertext is already exist')
      return
    }
    this.vertexes[value] = [];
  }

  addVertextes(vertexes){
    if(!Array.isArray(vertex)){
      throw new Error('put vertexes as type of array')
    }
    vertexes.forEach(v=>{
      this.addVertext(v)
    })
  }

  addEdge(value1, value2){
    let v1 = this.vertexes[value1];
    let v2 = this.vertexes[value2];
    if(v1, v2){
      v1.push(value2)
      v2.push(value1)
    }
  }

  addEdges(edges){
    if(!Array.isArray(edges)){
      throw new Error('put edges as type of array')
    }
    edges.forEach(edge=>{
      this.addEdge(...edge)
    })
  }

  removeEdge(v1, v2){
    this.vertexes[v1] = this.vertexes[v1].filter(v=> v !== v2);
    this.vertexes[v2] = this.vertexes[v2].filter(v=> v !== v1);
  }

  removeVertex(value){
    delete this.vertexes[value]
    for(const key in this.vertexes){
      this.vertexes[key] = this.vertexes[key].filter(v=> v !== value);
    }
  }
}

const graph = new AdjacencyMatrix(4, 5, [[0,1],[0,2],[0,3],[1,2],[2,3]])
const graph2 = new AdjacencyList(4, 5, [[0,1],[0,2],[0,3],[1,2],[2,3]])
console.log(graph2)
const graph3 = new Graph();
graph3.addVertext(1);
graph3.addVertext(2);
graph3.addVertext(3);
graph3.addVertext(4);
graph3.addEdges([[1,2],[3,4]]);
// graph3.removeEdge(1,2)
graph3.removeVertex(3)
console.log(graph3)
