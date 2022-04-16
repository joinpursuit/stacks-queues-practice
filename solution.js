const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor(top = null){
    this.top = top;
  }

  push(data) {
    let node = new Node(data)
    // console.log(data)
    if (this.top === null) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
  }

  pop(data) {
    let remove = this.top
    this.top = this.top.next
    
    return remove
  }

  size() {
    let count = 0;
    let currentNode = this.top;
    // console.log(currentNode)
    while (currentNode !== null) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  isEmpty() {
    if(!this.top){
      return true
    } return false
  }

  peek() {
    return this.top
  }

  findMin() {
    let node = this.top
    let min = node.data
    
    while(node.next){
      // console.log(node.data)
      if(node.next.data < min){
        min = node.next.data
      }
      node = node.next
    }
    return min
  }

  sort() {
    let node = this.top;
    // console.log(node)
    let arr = [];

    while(node){
      arr.push(node.data);
      node = node.next;
    }
    arr.sort();
    // console.log(arr);
    // return arr[0]
    this.top = arr[0];
    // console.log(this.top)
    let i = arr.length - 1
    while(i >= 0){
      // console.log(arr[i])
      node = new Node(arr[i])
      
      if (this.top === null) {
        this.top = node;
      } else {
        node.next = this.top;
        this.top = node;
      }
      i--
    }
  
  }

}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = 0
  }

  count(){
    let node = this.first;
    while (node){
      this.size++;
      node = node.next;
    }
    return this.size;
  }

  dequeue(){
    if (!this.first){
      throw new Error("Can't remove from empty queue");
    }
    if (this.first === this.last){
      this.last = null;
    }
    let node = this.first;
    this.first = this.first.next;
    return node.data;
  }

  enqueue(data){
    let newNode = new Node(data);
    if (!this.first){
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
  }

  findMax(){
    let node = this.first;
    let max = this.first.data;
    while (node){
      if (max < node.data){
        max = node.data;
      }
      node = node.next;
    }
    return max;
  }

  getLast(){
    let node = this.first;
    while (node){
      node = node.next;
      if (node.next === null){
        return node;
      }
    }
  }

  isEmpty(){
    if(this.size === 0) {
      return true
    } return false
  }

  peek(){
    return this.first;
  }
}



module.exports = {
  Node,
  Queue,
  Stack,
};
