// directed vs undirected --> can go two ways or only one
// weighted vs unweighted --> the edges (connections) has values
// using adjancecy list vs matrix
////////////////////////////

// graph with undirected and unweighted
class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].push(vertex2)
      this.adjacencyList[vertex2].push(vertex1)
    }
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (items) => items !== vertex2
    )
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (items) => items !== vertex1
    )
  }

  removeVertex(vertex) {
    const edges = this.adjacencyList[vertex]
    edges.map((adjacentVertex) => this.removeEdge(vertex, adjacentVertex))
    delete this.adjacencyList[vertex]
  }

  DFS_Recursive(start) {
    const results = [] //visited nodes
    const visited = {} // check if i visited that node
    const adjacencyList = this.adjacencyList

    //DFS recursive version
    function DFS(vertex) {
      if (!vertex) return null

      visited[vertex] = true
      results.push(vertex)

      let adjacentVertex = adjacencyList[vertex]

      adjacentVertex.map((item) => {
        if (!visited[item]) {
          return DFS(item)
        }
      })
    }
    DFS(start)
    return results
  }

  //DFS iterative
  DFS_iterative(start) {
    const visited = {}
    const results = []
    const S = [start]
    visited[start] = true
    let current

    while (S.length) {
      console.log(S)
      current = S.pop()
      results.push(current)
      this.adjacencyList[current].map((item) => {
        if (!visited[item]) {
          visited[item] = true
          S.push(item)
        }
      })
    }
    return results
  }
  BFS_iterative(start) {
    const visited = {}
    const results = []
    const queue = [start]
    visited[start] = true
    let current

    while (queue.length) {
      current = queue.shift()
      results.push(current)
      this.adjacencyList[current].map((item) => {
        if (!visited[item]) {
          visited[item] = true
          queue.push(item)
        }
      })
    }
    return results
  }
}

const g = new Graph()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')

// g.DFS_Recursive('A')
