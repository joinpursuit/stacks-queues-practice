const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data, next) {
    this.data = typeof data === "number" ? data >= 0 ? data : null : data || null;
    this.next = next || null;
  }
}

class Stack {
  constructor() {
    this.top = null; 
  }

  push(data) {
    let node = this.top;
    let newNode = new Node(data);
    newNode.next = node;
    this.top = newNode; 
   
    return this.size()
  }

  size() {
    let node = this.top
    let counter = 0
    
    while (node) {
      counter++
      node = node.next
    }
    return counter
  }

  pop() {
    let node = this.top
    this.top = node.next
    
    return node 
  }

  isEmpty() {
    return !this.size()
  }

  findMin() {
    let node = this.top 
    let min = this.top.data

    while (node) {
      if (min > node.data) {
        min = node.data
      }
     
      node = node.next
    }
    return min
  }

  peek() {
    return this.top
  }

  sort() {
    let node = this.top 
    let arr = [] 

    if (node.next == null) {
      return node 
    }

    while(node) {
      arr.push(node.data)
      node = node.next
    }

    if (typeof arr[0] == "number") {
      arr.sort((a,b) => b - a)
    } else {
      arr.sort((a, b) => {
        if (b < a) {
          return -1
        } else if (a > b) {
          return 1
        } else {
          return 0
        }
      })
    }

    let newStack = new Stack()
    arr.forEach((data) => newStack.push(data))
    
    this.top = newStack.top
    return this.top
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null; 
    this.size = 0;
    this.max = 0;
  }

  count() {
    return this.size
  }

  enqueue(data) {
    let newNode = new Node(data)
    
    if(!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    this.size++
  }

  dequeue() {
    if (!this.first) {
      throw new Error("Nothing in the stack")
    }

    if (this.first === this.last) {
      this.last = null
    }

    let temp = this.first
    this.first = this.first.next;

    this.size--

    return temp.data 
  }

  isEmpty() {
    return !this.first
  }

  peek() {
    return this.first
  }

  getLast() {
    return this.last
  }

  findMax() {
    let node = this.first
    let max = this.first
    
    while(node) {
      if (max.data < node.data) {
        max = node;
      }
      node = node.next
    }
    return max.data
  }
}


module.exports = {
  Node,
  Queue,
  Stack,
};
