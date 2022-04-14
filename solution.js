const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Stack{
  constructor(top = null){
    this.top = top;
  }
  push(val){
    const newItem = new Node(val);
    newItem.next = this.top;
    this.top = newItem;
  }
  size(){
    let size = 0;
    let temp = this.top;
    while(temp){
      size++;
      temp = temp.next;
    }
    return size;
  }
  pop(){
    if(this.top == null) return null;
    let temp = this.top;
    this.top = this.top.next;
    return temp;

    // Or
    // if(this.top == null) return null;
    // let item = this.top;
    // if(item){
    //   let newItem = item.next;
    //   this.top = newItem;
    //   return item;
    // }
  }
  isEmpty(){
    // return !this.top;
    return this.top === null;
  }
  findMin(){
    if(this.isEmpty()) return null;
    let temp = this.top;
    let min = temp.data;
    while(temp){
      if(temp.data < min){
        min = temp.data
      }
      temp = temp.next;
    }
    return min;
  }
  peek(){
    // if (this.top == null) return null;
    return this.top;
  }
  convertToArr(){
    let temp = this.top;
    let arr = [];
    while(temp){
      arr.unshift(temp.data.toLowerCase());
      temp = temp.next;
    }
    return arr;
  }
  sort(){
    // let stackArr = this.convertToArr();
    // stackArr.sort().reverse();
    // this.top = null;

    // for(let val of stackArr){
    //   this.push(val);
    // }

    // Or

    let stackArr = this.convertToArr();
    stackArr.sort((a,b) => a < b ? 1 : -1);
    
    this.top = null;

    for(let val of stackArr){
      this.push(val);
    }

    // Or

    // let stackArr = this.convertToArr();
    // stackArr.sort();
    // this.top = null;

    // for(let i = stackArr.length - 1; i >= 0; i--){
    //   this.push(stackArr[i]);
    // }

  }
}

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = 0;
  }
  count(){
    let count = 0;
    let temp = this.first;
    while(temp){
      count++;
      temp = temp.next;
    }
    return count;
  }
  dequeue(){
    if(this.first == null){
      throw new Error("The queue is empty");
    }
    const temp = this.first;
    if(this.first === this.last){
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.data;
  }
  enqueue(data){
    let newItem = new Node(data);
    if(!this.first){
      this.first = newItem;
      this.last = newItem;
    }else{
      this.last.next = newItem;
      this.last = newItem;
    }
    return ++this.size;
  }
  getLast(){
    return this.last;
  }
  isEmpty(){
    return this.first === null;
  }
  peek(){
    return this.first;
  }
  findMax(){
    let temp = this.first;
    let maxVal = temp.data;

    while(temp){
      if(temp.data >= maxVal){
        maxVal = temp.data;
      }
      temp = temp.next;
    }
    return maxVal;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
