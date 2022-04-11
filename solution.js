const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(top = null) {
    this.top = top;
  }
  push(val) {
    const newNode = new Node(val);
    newNode.next = this.top;
    this.top = newNode;
  }
  size() {
    let count = 0;
    let temp = this.top;
    while(temp) {
      count++;
      temp = temp.next;
    }
    return count;
  }
  pop() {
    if(this.top === null) return null;
    let temp = this.top;
    this.top = this.top.next;
    return temp;
  }
  isEmpty() {
    return this.top === null;
  }
  findMin() {
    let temp = this.top;
    let otherStack = [this.peek()];
    while(temp) {
      if(this.peek() <= otherStack[0]) {
        otherStack.push(this.peek());
        temp = temp.next;
      }
    }
    return otherStack[0].data;
  }
  peek() {
    return this.top;
  }
  sort() {
    let temp = this.top;
    let arr = [];
    let newStack = new Stack();
    while(temp) {
      arr.push(temp.data);
      temp = temp.next;
    }
    arr.sort().reverse();
    arr.forEach(node => newStack.push(node));
    this.top = newStack.top;
    return this.top;
  }
}

class Queue {
  constructor(size, max) {
    this.first = null;
    this.last = null;
    this.size = size;
    this.max = max;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if(!this.first) this.first = newNode;
    else this.last.next = newNode;
    this.last = newNode;
  }
  dequeue() {
    if(this.first === this.last) this.last = null;
    let temp = this.first;
    this.first = this.first.next;
    return temp.data;
  }
  count() {
    let count = 0;
    let temp = this.first;
    while(temp) {
      count++;
      temp = temp.next;
    }
    return count;
  }
  isEmpty() {
    return !this.first;
  }
  peek() {
    return this.first;
  }
  getLast() {
    return this.last;
  }
  findMax() {
    let temp = this.first;
    let maxVal = temp.data;
    while(temp) {
      if(temp.data >= maxVal) maxVal = temp.data;
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
