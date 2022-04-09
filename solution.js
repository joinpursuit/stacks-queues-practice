const { nums, words } = require("./data/data.js");
const { inspect } = require("util");
const internal = require("stream");
const { INSPECT_MAX_BYTES } = require("buffer");

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
    const item = new Node(data);
    item.next = this.top;
    this.top = item;
  }

  pop() {
    let item = this.top;
    if (item) {
      let newTop = item.next;
      this.top = newTop;
      return item;
    }
  }

  size() {
    let count = 0;
    let currNode = this.top;
    while (currNode) {
      count++;
      currNode = currNode.next;
    }
    return count;
  }

  isEmpty() {
    return this.top === null;
  }

  peek() {
    return this.top;
  }

  findMin(value) {
    let count = 0;
    let currentNode = this.top;

    while (currentNode != null) {
      if (count === value) {
        return currentNode;
      }
      count++;
      currentNode = currentNode.next;
    }
    return 0;
  }

  sort() {
    return (this.top = this.findMin());
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(data) {
    let item = new Node(data);
    if (!this.first) {
      this.first = item;
      this.last = item;
      this.size++;
    } else {
      this.last.next = item;
      this.last = item;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    let current = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return current.data;
  }

  peek() {
    return this.first;
  }

  isEmpty() {
    return this.first === null;
  }

  count() {
    let count = 0;
    let currNode = this.first;
    while (currNode) {
      count++;
      currNode = currNode.next;
    }
    return count;
  }

  getLast() {
    return this.last;
  }

  // findMax(value) {
  //   let;
  // }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
