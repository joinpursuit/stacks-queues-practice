const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(top=null){
    this.top = top;
  }
  push(val){
    let newNode = new Node(val);
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
    let temp = this.top;
    let counter = 0;

    while(temp){
      counter++;
      temp = temp.next;
    }
    return counter;
  }
  isEmpty(){
    return this.top === null;
  }
  peek(){
    return this.top;
  }
  findMin(){
    if(this.isEmpty()) return null;
    let temp = this.top;
    let min = temp.data;
    while(temp){
      if(temp.data < min.data){
        min.data = temp.data;
      }
      temp =temp.next;
    }
    return min
  }
  convertToArr(){
    let temp = this.top;
    let arr = [];
    while(temp){
      arr.push(temp.data.toLowerCase())
      temp = temp.next;
    }
    return arr;
  }
  sort(){
    let stackArr = this.convertToArr();
    stackArr.sort((a,b) =>{
      if(a < b){
        return 1;
      }else {
        return -1;
      }
    });
    this.top = null; //empties the stack

    for(let val of stackArr){
      this.push(val)
    }

    // for(let i = stackArr.length - 1; i >= 0; i--){
    //   this.push(stackArr[i])
    // }

  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = 0;
  }
  enqueue(val){
    let newNode = new Node(val);
    if(this.first === null){
      this.first = newNode;
      this.last = newNode
    } else {
      this.last.next = newNode;
    }
    this.last = newNode;
  }
  dequeue(){
    if(this.first === null) return null;
    let temp = this.first;

    if(this.first === this.last){
      this.last = null;
    } else {
      this.first = this.first.next
    }
    return temp.data;
  }
  peek(){
    return this.first;
  }
  getLast(){
    return this.last;
  }
  isEmpty(){
    return this.first === null;
  }
  count(){
    let temp = this.first;
    let counter = 0;

    while(temp){
      counter++;
      temp = temp.next;
    }
    return counter;
  }
  findMax(){
    let temp = this.first;
    let max = 0;

    while(temp){
      if(temp.data > max){
        max = temp.data;
      }
      temp = temp.next;
    }
    return max;
  }
}


module.exports = {
  Node,
  Stack,
  Queue,
};
