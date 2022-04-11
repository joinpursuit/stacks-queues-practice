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

  push(num) {
    let newNode = new Node(num);
    newNode.next = this.top;
    this.top = newNode;
  }
  pop() {
    let removed = this.top;
    if (removed) {
      let newItem = removed.next;
      this.top = newItem;
    } else {
      throw error("link list empty");
    }
    return removed;
  }

  size() {
    let count = 0;
    let current = this.top;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  isEmpty() {
    return this.top === null;
  }

  peek() {
    return this.top;
  }

  findMin() {
    let smallest = +Infinity;
    let current = this.top;
    while (current) {
      if (current.data < smallest) {
        smallest = current.data;
      }
      current = current.next;
    }
    return smallest;
  }

  sort() {
    let current = this.first;
    while (current) {
      if (current.data < currentNum.data) {
        currentNum = current;
        let temp = currentNum.next;
        this.last.next = temp;
        currentNum.next = this.last;
        this.last = currentNum;
      } else {
        this.last = current;
      }

      current = current.next;
    }
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(num) {
    let newItem = new Node(num);
    if (!this.first) {
      this.first = newItem;
      this.last = newItem;
    } else {
      this.last.next = newItem;
      this.last = newItem;
    }
    return this.size++;
  }

  dequeue() {
    let item = this.first;
    if (item) {
      let temp = item.next;
      this.first = temp;
      this.size--;
    } else {
      throw error("linked list is empty");
    }
    return item.data;
  }

  count() {
    return this.size;
  }

  isEmpty() {
    return this.first === null;
  }

  peek() {
    return this.first;
  }

  getLast() {
    return this.last;
  }

  findMax() {
    let largest = -Infinity;
    let current = this.first;
    while (current) {
      if (current.data > largest) {
        largest = current.data;
      }
      current = current.next;
    }
    return largest;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
