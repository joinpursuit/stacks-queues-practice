const { nums, words } = require("./data/data.js");
const { inspect } = require("util");
const { timeStamp } = require("console");

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

  push(data) {
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
  }

  size() {
    let item = this.top;
    let count = 0;
    while (item) {
      count++;
      item = item.next;
    }
    return count;
  }

  pop() {
    let item = this.top;
    this.top = this.top.next;
    return item;
  }

  isEmpty() {
    return this.top === null;
  }

  peek() {
    if (this.top === null) {
      throw new Error("This stack is empty!");
    }
    return this.top;
  }

  // findMin() {}

  //sort(){}
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = 0;
  }

  count() {
    return this.size;
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
    ++this.size;
    //if the data is more than the count then the count is now the data
    if (data > this.max) {
      this.max = data;
    }
  }

  dequeue() {
    let item = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return item.data;
  }

  //added the conditional in enqueue and now i dont even understand how it works or if it actually did
  findMax() {
    return this.max;
  }

  getLast() {
    return this.last;
  }

  isEmpty() {
    return this.first === null;
  }

  peek() {
    if (this.first === null) {
      throw new Error("This queue is empty!");
    }
    return this.first;
  }
}

const queue = new Queue();

queue.enqueue("Jan");
queue.enqueue("Feb");

console.log(queue);

module.exports = {
  Node,
  Queue,
  Stack,
};
