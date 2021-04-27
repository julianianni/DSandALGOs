class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
    const newNode = new Node(val)
    if (this.head == null) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }
  pop() {
    if (!this.head) return undefined
    const removed = this.tail
    if (this.length == 1) {
      this.tail = null
      this.head = null
    } else {
      this.tail = removed.prev
      this.tail.next = null
      removed.prev = null
    }
    this.length--
    return removed
  }
  shift() {
    if (!this.head) return undefined
    const firstRemoved = this.head
    if (this.length == 1) {
      this.tail = null
      this.head = null
    } else {
      this.head = firstRemoved.next
      this.head.prev = null
      firstRemoved.next = null
    }
    this.length--
    return firstRemoved
  }
  unshift(val) {
    const newHead = new Node(val)
    if (!this.head) {
      this.head = newHead
      this.tail = newHead
    } else {
      this.head.prev = newHead
      newHead.next = this.head
      this.head = newHead
    }
    this.length++
    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined
    let i, temp
    if (index > this.length / 2) {
      i = this.length - 1
      temp = this.tail
      while (index !== i) {
        temp = temp.prev
        i--
      }
      return temp
    } else {
      i = 0
      temp = this.head
      while (index !== i) {
        temp = temp.next
        i++
      }
      return temp
    }
  }
  set(index, val) {
    const newNode = this.get(index)
    if (newNode == undefined) return false
    newNode.val = val
    return true
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return undefined
    if (index === 0) return this.unshift(val)
    if (index === this.length) return this.push(val)
    else {
      const newNode = new Node(val)
      const prevNode = this.get(index - 1)
      const nextNode = prevNode.next

      prevNode.next = newNode
      newNode.prev = prevNode
      nextNode.prev = newNode
      newNode.next = nextNode

      this.length++
      return true
    }
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()
    else {
      const removed = this.get(index)
      const nextNode = removed.next
      const prevNode = removed.prev

      prevNode.next = nextNode
      nextNode.prev = prevNode
      removed.next = null
      removed.prev = null
      this.length--
      return removed
    }
  }
  //
}

// const node = new Node(5)
const list = new DoublyLinkedList()
// list.unshift(2)
list.push(1)
list.push(2)
list.push(3)
// list.push(4)
// list.push(5)
// list.push(6)
// console.log(list)
// console.log(list.get(0))
// console.log(list.set(0, 10))
// list.insert(1, 2)
// console.log(list)
// list.remove()
