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

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
  }

  size() {
    let count = 0;
    let node = this.top;
    while (node !== null) {
      count++;
      node = node.next;
    }

    return count;
  }

  pop() {
    let item = this.top;
    if (item) {
      let newTop = item.next;
      this.top = newTop;

      return item;
    }
  }

  isEmpty() {
    return this.top === null;
  }

  findMin() {
    let min = this.top.data;
    let node = this.top;
    while (node.next !== null) {
      if (min > node.data) {
        min = node.data;
      }
      node = node.next;
    }

    return min;
  }

  peek() {
    return this.top;
  }

  isSorted(node) {
    let currentNode = node;
    while (currentNode && currentNode.next) {
      if (currentNode.data <= currentNode.next.data) {
        currentNode = currentNode.next;
      } else {
        return false;
      }
    }
    return true;
  }

  sort() {
    if (this.isSorted(this.top)) {
      return;
    } else {
      let currentNode = this.top;
      let nextNode = this.top.next;
      while (nextNode) {
        let hold = nextNode;

        if (currentNode.data > nextNode.data) {
          let bigData = currentNode.data;
          let smallData = nextNode.data;
          currentNode.data = smallData;
          nextNode.data = bigData;
        }

        currentNode = hold;
        nextNode = hold.next;
      }

      return this.sort();
    }
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = null;
  }

  count() {
    return this.size;
  }

  enqueue(data) {
    let newItem = new Node(data);
    if (this.size === 0) {
      this.first = newItem;
      this.last = newItem;
    }
    this.last.next = newItem;
    this.last = newItem;
    return ++this.size;
  }

  dequeue() {
    let original = this.first;
    if (original === this.last) {
      this.last = this.next;
    }
    let newFirst = original.next;
    this.size--;
    this.first = newFirst;
    return original.data;
  }

  findMax() {
    this.max = this.first.data;
    let node = this.first;
    while (node.next !== null) {
      if (node.data > this.max) {
        this.max = node.data;
      }
      node = node.next;
    }
    return this.max;
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    return this.first;
  }

  getLast() {
    return this.last;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
