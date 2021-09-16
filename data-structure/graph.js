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
        console.log([node[0]-1], [node[1]-1])
        this.graph[node[0]-1][node[1]-1] = 1;
        // 무향 그래프의 경우 반대 간선도 존재
        this.graph[node[1]-1][node[0]-1] = 1;
      })
    }
  }
}


const graph = new AdjacencyMatrix(4, 5, [[1,2],[1,3],[1,4],[2,3],[3,4]])
console.log(graph)