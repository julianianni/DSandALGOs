class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }
  insert(value) {
    const newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode
      return this
    }
    let current = this.root
    while (true) {
      if (value === current.value) return undefined
      if (value < current.value) {
        if (current.left !== null) {
          current = current.left
        } else {
          current.left = newNode
          return this
        }
      } else if (value > current.value) {
        if (current.right !== null) {
          current = current.right
        } else {
          current.right = newNode
          return this
        }
      }
    }
  }
  find(value) {
    if (this.root == null) return false
    let current = this.root
    while (true) {
      if (value == current.value) return current
      if (value > current.value) {
        if (current.right === null) {
          return false
        } else {
          current = current.right
        }
      } else {
        if (current.left === null) {
          return false
        } else {
          current = current.left
        }
      }
    }
  }
  //Breadth First Search --> visit every node in a vertical aproach. Visit every node of every level with QUEUE solution (fifo) using arrays[]
  //data is the solution we return (the values from the tree) and queue is where keep track of the values to be visited
  BFS() {
    let data = [],
      queue = [],
      node = this.root
    queue.push(node)

    while (queue.length) {
      node = queue.shift()
      data.push(node.value)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    return data
  }
  //DFS with preOrder... visit all the left, then the rigth of every node---> doing recursively
  DFSPreOrder() {
    let data = []
    function traverse(node) {
      data.push(node.value)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
  }
  //DFS with PostOrder... visit all the left, then the rigth of every node but push the node at the end---> doing recursively
  DFSPostOrder() {
    let data = []
    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      data.push(node.value)
    }
    traverse(this.root)
    return data
  }
  //DFS with InOrder... visit all the left, push the node and then the rigth side---> doing recursively
  DFSInOrder() {
    let data = []
    function traverse(node) {
      if (node.left) traverse(node.left)
      data.push(node.value)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
  }
}

const bst = new BST()
bst.insert(10)
bst.insert(6)
bst.insert(15)
bst.insert(3)
bst.insert(8)
bst.insert(20)
// console.log(bst.BFS())
bst.DFSPreOrder()

//queue = []
//data = [10, 6, 15, 3, 8, 20]
// node = []
