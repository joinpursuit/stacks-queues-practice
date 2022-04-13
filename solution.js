//Dependencies
const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  };
};

class Stack{
  constructor(top = null){
    this.top = top;
  };
  /////////////////// Stack Methods////////////////
  push(value){
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  };

  pop(){
    if(this.top === null){
      throw new Error("The stack is empty");
    };
    let temp = this.top;
    if(temp){
      let newTemp = temp.next;
      this.top = newTemp;
      return temp;
    }
  };

  size(){
    let count = 0;
    let temp = this.top;
    while(temp){
      count++;
      temp = temp.next;
    };
    return count;
  };

  isEmpty(){
    return this.top === null;
  };

  findMin(){
    let temp = this.top;
    let min = temp.data;
    while(temp){
      if(min > temp.data){
        min = temp.data;
      };
      temp = temp.next;
    };
    return min;
  };

  peek(){
    if(this.top === null){
      throw new Error("The stack is empty");
    };
    return this.top;
  };

  sort(){
    let minimumVal = this.top;
    let tempStack = this.top;
    if(this.top === null){
      throw new Error("The stack is empty");
    };
    while(tempStack !== null){
      if(tempStack.data < minimumVal.data){
        minimumVal = tempStack;
      };
      tempStack = tempStack.next;
    }
    minimumVal.next = this.top;
    this.top = minimumVal;
    return minimumVal;
  };
};

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = 0;
  };

  ////////////// Queue Methods/////////////////

  count(){
    return this.size;
  };
  
  dequeue(){
    if(this.first === null){
      throw new Error("The queue is empty");
    };
    const item = this.first;
    if(this.first === this.last){
      this.last = null;
    };
    this.first = this.first.next;
    this.size--;
    return item.data;
  };

  enqueue(data){
    let newItem = new Node(data);
    if(!this.first){
      this.first = newItem;
      this.last = newItem;
    } else{
      this.last.next = newItem;
      this.last = newItem;
    };
    return ++this.size;
  };

  findMax(){
    if(this.first === null){
      throw new Error("The queue is empty");
    };
    let temp = this.first;
    while(temp){
      if(temp.data > this.max){
        this.max = temp.data;
      }
      temp = temp.next;
    };
    return this.max;
  };

  getLast(){
    return this.last;
  };

  isEmpty(){
    return this.first === null;
  };

  peek(){
    if(this.first === null){
      throw new Error("The queue is empty");
    };
    return this.first;
  };
};



module.exports = {
  Node,
  Queue,
  Stack,
};
