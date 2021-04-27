class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
    var nextNode = new Node(val)
    if (!this.head) {
      this.head = nextNode
      this.tail = this.head
    } else {
      this.tail.next = nextNode
      this.tail = nextNode
    }
    this.length++
    return this
  }
  pop() {
    if (!this.head) return undefined
    let current = this.head
    let newTail = current

    while (current.next) {
      newTail = current
      current = current.next
    }

    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length == 0) {
      this.head = null
      this.tail = null
    }
    return current
  }
  shift() {
    if (!this.head) {
      return undefined
    }
    const currenthead = this.head
    this.head = currenthead.next
    // currenthead.next = null
    this.length--
    if (this.length == 0) {
      this.tail = null
    }
    return currenthead
  }
  unshift(val) {
    var newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
  get(index) {
    if (this.length <= index || index < 0) return undefined
    let counter = 0
    let currentItem = this.head
    while (counter !== index) {
      currentItem = currentItem.next
      counter++
    }
    return currentItem
  }
  set(val, index) {
    var foundNode = this.get(index)
    if (foundNode) {
      foundNode.val = val
      return true
    }

    return false
  }

  insert(val, index) {
    if (index < 0 || index > this.length) return false
    if (index == this.length) {
      this.push(val)
      return true
    }
    if (index == 0) {
      this.unshift(val)
      return true
    }
    const newNode = new Node(val)
    const prev = this.get(index - 1)
    const current = prev.next
    prev.next = newNode
    newNode.next = current
    this.length++
    return true
  }
  remove(val, index) {
    if (index < 0 || index > this.length) return undefined
    if (index == this.length - 1) this.pop(val)
    if (index == 0) this.shift()
    const prev = this.get(val, index - 1)
    const removed = prev.next
    prev.next = removed.next
    this.length--
    return removed.val
  }
  reverse() {
    var node = this.head
    this.head = this.tail
    this.tail = node
    var next
    var prev = null
    while (node != null) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return this

    // let prev = null
    // let next = null
    // let current = this.head //ok
    // this.head = this.tail
    // while (current != null) {
    //   test.push(current)
    //   next = current.next
    //   current.next = prev
    //   prev = current
    //   current = next
    // }
    return this
  }
}

const ejemplo = new SinglyLinkedList()
ejemplo.push('1')
ejemplo.push('2')
ejemplo.push('3')
ejemplo.push('4')
ejemplo.push('5')
// ejemplo.pop()
// ejemplo.pop()
// ejemplo.pop()
// ejemplo.pop()
// ejemplo.pop()
// ejemplo.pop()
// ejemplo.push('1')
// ejemplo.push('2')
// console.log(ejemplo.shift())
// console.log(ejemplo.shift())
// ejemplo.unshift('0')
// console.log(ejemplo)
// console.log(ejemplo.get(5))
// console.log(ejemplo.set('hello', 2))
// console.log(ejemplo.get(2))
// ejemplo.insert(4.5, 4)
// ejemplo.get(4)
console.log(ejemplo.reverse())
