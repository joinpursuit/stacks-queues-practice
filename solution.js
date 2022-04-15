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
  // insert
  push(value) {
    let newNode = new Node(value);
    // if property exists change pointer
    newNode.next = this.top;
    // replace top with new node
    this.top = newNode;
  }
  // remove
  pop() {
    if (this.top === null) return null;
    let temp = this.top;
    this.top = temp.next;
    return temp;
  }
  size() {
    let count = 0;
    let temp = this.top;
    while (temp) {
      count++;
      temp = temp.next;
    }
    return count;
  }
  isEmpty() {
    return this.top === null;
  }
  findMin() {
    if (this.isEmpty()) return null;
    let temp = this.top;
    let min = temp.data;
    while (temp) {
      if (temp.data < min) {
        min = temp.data;
      }
      temp = temp.next;
    }
    return min;
  }
  peek() {
    return this.top;
  }
  convertToArr() {
    let temp = this.top;
    let arr = [];
    while (temp) {
      arr.unshift(temp.data.toLowerCase());
      temp = temp.next;
    }
    return arr;
  }
  sort() {
    let stackArr = this.convertToArr();
    stackArr.sort();
    // stackArr.sort((a, b) => {
    //   if(a < b) {
    //     return 1
    //   }
    //   return -1
    // })

    this.top = null;

    for (let i = stackArr.length - 1; i >= 0; i--) {
      this.push(stackArr[i]);
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
  enqueue(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }
    this.last = newNode;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    let temp = this.first;
    this.first = this.first.next;
    return temp.data;
  }
  findMax() {
    let temp = this.first;
    let max = 0;

    while (temp) {
      if (temp.data > max) {
        max = temp.data;
      }
      temp = temp.next;
    }
    return max;
  }
  peek() {
    return this.first;
  }
  getLast() {
    return this.last;
  }
  isEmpty() {
    return this.first === null && this.last === null;
  }
  count() {
    let temp = this.first;
    let count = 0;
    while (temp) {
      count++;
      temp = temp.next;
    }
    return count;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
