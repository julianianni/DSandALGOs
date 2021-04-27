//stored in an array.
//if im in a parent and want to acces the children i can do:
// 2*index + 1 = left children
// 2+index + 2 = rigth children
//if im in a children and want to access the parent i do parentIdx = Math.floor((childrenIdx -1) / 2)

class MaxBinaryHeap {
  constructor() {
    this.values = []
  }
  insert(element) {
    this.values.push(element)
    this.bubbleUp()
  }
  bubbleUp() {
    let idx = this.values.length - 1
    let newElement = this.values[idx]
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      let parentElement = this.values[parentIdx]
      if (parentElement >= newElement) break
      this.values[idx] = parentElement
      this.values[parentIdx] = newElement
      idx = parentIdx
    }
  }
  extractMax() {
    //swap 1st with n-th value
    const max = this.values[0]
    let end = this.values.pop()
    if (this.values.length > 0) {
      this.values[0] = end
      //end swap
      //beggin sink down (bubble-down the 1st element if necesarry)
      this.sinkDown()
    }
    return max
  }
  sinkDown() {
    let idx = 0
    const length = this.values.length
    const element = this.values[0]
    let leftChild, rightChild
    while (true) {
      let leftChildIdx = idx * 2 + 1
      let rightChildIdx = idx * 2 + 2
      let swap = null

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx]
        if (leftChild > element) {
          swap = leftChildIdx
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx]
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx
        }
      }
      if (swap === null) break
      this.values[idx] = this.values[swap]
      this.values[swap] = element
      idx = swap
    }
  }
}

let heap = new MaxBinaryHeap()
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)
