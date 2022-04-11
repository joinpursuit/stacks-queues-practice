const { nums, words } = require("./data/data.js");
const { inspect } = require("util");


class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}



class Stack {
  constructor(top = null) {
    this.top = top
  }



  push(data){
  let newNode = new Node(data)
    newNode.next = this.top;
    this.top = newNode
  }



  pop() {
  let currentNode = this.top;
      if(currentNode) {
        let newTop = currentNode.next
        this.top = newTop;
        return currentNode;
      }
  }
  


  size() {
    let count = 0;
    let currentNode = this.top;
    while(currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }
  


  isEmpty() {
    return this.top === null;
  }
  


  peek() {
    return this.top;
  }
  

  findMin() {
    let min = this.top.data;
    let currentNode = this.top;
    while (currentNode) {
      if (currentNode.data < min) {
        min = currentNode.data;
      }
      currentNode = currentNode.next;
    }
    return min;
  }
  

  sort(){
    let arr = [] 
    let currentNode = this.top
    while(currentNode !== null){
      arr.push(currentNode.data)
      currentNode = currentNode.next
    }

      arr.sort().reverse()
      let newStack = new Stack()
      for(let i = 0; i < arr.length; i++){
        newStack.push(arr[i])
      }

      this.top = newStack.top
      return this.top
  
  }
  
}







class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  enqueue(data) {
    let item = new Node(data);

    if(!this.first) {
      this.first = item;
      this.last = item;
    } else {
      this.last.next = item;
      this.last = item;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) {
      return null
    } 
    let current = this.first
    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next;
    this.size--
    return current.data;
  }
  

  isEmpty() {
    return this.first === null;
  }
  

  peek() {
    return this.first;
  }

  
  count() {
    let count = 0;
    let currentNode = this.first;
    while(currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  
  getLast(){
    return this.last;
  }


  findMax() {
    let max = this.first.data;
    let currentNode = this.first;
    while (currentNode) {
      if (currentNode.data > max) {
        max = currentNode.data;
      }
      currentNode = currentNode.next;
    }
    return max;
  }

}

































module.exports = {
  Node,
  Queue,
  Stack,
};
