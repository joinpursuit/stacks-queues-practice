const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(top = null){
    this.top = top;
  }
  push(value){
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }
  pop(){
    if(this.top === null) return null;
    let temp = this.top;
    this.top = this.top.next;
    return temp;
  }
  size(){
    let count = 0;
    let temp = this.top;
    while(temp){
      count++;
      temp = temp.next;
    }
    return count;
  }
  isEmpty(){
    return this.top === null;
  }
  peek(){
    return this.top;
  }
  findMin(){
    let node = this.top;
    while (node){
      if (this.top < node.next){
        node.next = node.next.next;
      } else if (this.top > node.next){
        this.top = node.next;
      }
      return node.data;
    }
  }
  sort(){}
}

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(value){
    let newNode = new Node(value);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    }else{
      this.last.next = newNode;
      this.last = newNode;
    }
  }
  dequeue(){
    if(!this.first === null){
      return `Cant return from an empty`;
    }
    if(this.first === this.last){
      this.first = null;
      this.last = null;
    }
    let temp = this.first;
    this.first = this.first.next;
    return temp.data;
  }
  count(){

  }
  isEmpty(){

  }
  peek(){

  }
  getLast(){

  }
  findMax(){
  
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
