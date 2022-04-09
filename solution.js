// const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node{
  constructor(data, next = null){
    this.data = data
    this.next = next
  }
}

class Stack{
  constructor(){
    this.top = null;
  }

  push(data){
    const newNode = new Node(data)
    if(this.top === null){
      this.top = newNode
    } else {
      newNode.next = this.top
      this.top = newNode
    }
  }

  pop(){
    let item = this.top
    this.top = this.top.next
    return item
  }

  size(){
    let currentNode = this.top
    let counter = 0
    while(currentNode){
      currentNode = currentNode.next
      ++counter
    }
    return counter
  }

  isEmpty(){
    if(this.top === null) return true
    return false
  }

  peek(){
    return this.top
  }

  findMin(){
    let min = this.top.data
    let currentNode = this.top.next
    while(currentNode){
      if(min > currentNode.data){
        min = currentNode.data
      }
      currentNode = currentNode.next
    }
    return min
  }

  sort(){
    //make array of data from stack
    const array = []
    let currentNode = this.top
    while(currentNode){
      array.push(currentNode.data)
      currentNode = currentNode.next
    }
    //sort array
    array.sort()
    const newStack = new Stack()
    //use for loop to create `newStack`
    for(let i = array.length-1; i >= 0; i--){
        newStack.push(array[i])
    }
    this.top = newStack.top

    //reassign this.top to `newStack`
    return this
  }
}

class Queue{
  constructor(){
    this.first = null
    this.last = null
    this.size = 0
    this.max = null
  }

  enqueue(data){
    const newNode = new Node(data)
    if(this.first === null){
      this.first = newNode
      this.last = newNode
    }else {
      this.last.next = newNode
      this.last = newNode
    }
    ++this.size
  }

  dequeue(){
    const item = this.first
    this.first = this.first.next
    --this.size
    this.max = null
    return item.data
  }

  count(){
    return this.size
  }

  isEmpty(){
    return this.first === null
  }

  peek(){
    return this.first
  }

  getLast(){
    return this.last
  }

  findMax(){
    if(this.max) return this.max
    let max = this.first.data
    let currentNode = this.first.next
    while(currentNode){
      if(max < currentNode.data){
        max = currentNode.data
      }
      currentNode = currentNode.next
    }
    this.max = max
    return max
  }
}


module.exports = {
  Node,
  Queue,
  Stack,
};
