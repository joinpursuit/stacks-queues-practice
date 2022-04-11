const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node{
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack{
  constructor(top = null){
    this.top = top;
  }

  push(value){
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  size(){
    let count = 0;
    let temp = this.top;
    while(temp){
      count++;
      temp = temp.next;
    }
    return count
  }

  pop(){
    if(this.top === null) return null;

    let temp = this.top;
    this.top = this.top.next;
    return temp
  }

  isEmpty(){
    return this.top === null
  }

  findMin(){
    let min = this.top.data;
    let temp = this.top.next;
    while(temp){
      if(temp.data < min) min = temp.data;
      temp = temp.next;
    }
    return min
  }

  peek(){
    return this.top;
  }

  sort(){
    let temp = this.top;
    let arr = [];
    let newStack = new Stack();

    while(temp) {
      arr.push(temp.data);
      temp = temp.next;
    }

    arr.sort().reverse();
    arr.forEach(each => newStack.push(each));
    this.top = newStack.top;
    return this.top;
  }
}

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = null;
  }

  count(){
    return this.size;
  }

  dequeue(){
    let node = this.first;
    if(this.first === this.last){
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return node.data;
  }

  enqueue(data){
    let newNode = new Node(data);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    }else{
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;

    if(data > this.max){
     this.max = data;
    }
  }

  isEmpty(){
    return this.first === null;
  }

  peek(){
    return this.first;
  }

  getLast(){
    return this.last;
  }

  findMax(){
    return this.max;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
