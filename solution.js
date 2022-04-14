const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

// const words = [
//   "the",
//   "quick",
//   "brown",
//   "fox",
//   "jumps",
//   "over",
//   "the",
//   "lazy",
//   "dog",
// ];

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(top = null){
    this.top = top;
  }
  push(data) {
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
  }
  pop() {
    if (this.top == null) {
      throw new Error("the stack is empty");
    }
    let item = this.top;
    if (item) {
      let newItem = item.next;
      this.top = newItem;
      return item;
    }
  }
  size() {
    let temp = this.top;
    let counter = 0;

    while(temp){
      counter++;
      temp = temp.next;
    } 
    return counter;
  }
  isEmpty() {
    return this.top === null;
  }
  peek() {
    if (this.top === null) {
      throw new Error("The stack is empty");
    }
    return this.top;
  }
  findMin(){
    if(this.isEmpty()) return null;
    let temp = this.top;
    let min = temp.data;
    while(temp){
      if(temp.data < min){
        min = temp.data;
      }
      temp = temp.next;
    }
    return min;
  }
  convertToArr(){
    let temp = this.top;
    let arr = [];
    while(temp){
      arr.unshift(temp.data.toLowerCase());
      temp = temp.next
    }
    return arr;
  }
  sort() {
    let stackArr = this.convertToArr();
    stackArr.sort((a, b)=>{
      return a < b ? 1 : -1
    })
    this.top = null;

    for (let val of stackArr){
      this.push(val);
    }
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = 0;
  }
  enqueue(data) {
    let newItem = new Node(data);
    if (!this.first) {
      this.first = newItem;
      this.last = newItem;
    } else {
      this.last.next = newItem;
      this.last = newItem;
    }
    return ++this.size
  }
  dequeue() {
    if (this.first === null) {
      throw new Error("The queue is empty");
    }
    const item = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return item.data;
  }
  peek() {
    if (this.first === null) {
      throw new Error("the queue is empty");
    }
    return this.first;
  }
  count() {
    let temp = this.first;
    let counter = 0;
    while(temp){
      counter++;
      temp = temp.next;
    }
    return counter;
  }
  isEmpty() {
    return this.first === null;
  }
  getLast(){
    return this.last;
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
  Queue,
  Stack,
};
