const { nums, words } = require('./data/data.js');
const { inspect } = require('util');

class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = this.bot = null;
    this.length = 0;
  }

  push(input) {
    const newNode = new Node(input);
    if (!this.top) {
      this.top = this.bot = newNode;
    } else {
      this.top.prev = newNode;
      let temp = this.top;
      this.top = newNode;
      this.top.next = temp;
    }
    return ++this.length;
  }

  pop() {
    const temp = this.top;
    if (!this.top) {
      return temp;
    } else if (this.size === 1) {
      this.top = this.bot = null;
      this.length = 0;
    } else {
      this.top = this.top.next;
      --this.length;
    }
    return temp;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return !this.length;
  }

  peek() {
    return this.top;
  }

  findMin() {
    let current = this.top;
    let min = this.top;
    while (current !== null) {
      min = min.data > current.data ? current : min;
      current = current.next;
    }
    return min.data;
  }

  sort() {
    const createSort = () => {
      let current = this.top;
      let min = this.top;
  
      while (current !== null) {
        min = min.data >= current.data ? current : min;
        current = current.next;
      }
  
      switch (true) {
        case min === null:
          return min;
        case this.top.prev === null && this.top.next === null:
          this.top = this.bot = null;
          break;
        case min === this.top:
          this.top = this.top.next;
          this.top.prev = null;
          break;
        case min === this.bot:
          this.bot = this.bot.prev;
          this.bot.next = null;
          break;
        default:
          min.prev.next = min.next;
          min.next.prev = min.prev;
      }
  
      if (this.top !== null) {
        min.next = createSort();
        min.next.prev = min;
      } else {
        min.next = null;
      }
      return min;
    }
    const sortedNode = createSort();
    this.top = sortedNode;
    this.bot = this.findBot();
  }

  findBot() {
    let current = this.top;
    let bottomNode;
    while (current !== null) {
      bottomNode = current;
      current = current.next;
    }
    return bottomNode;
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

  dequeue() {
    const removed = this.first;
    if (!this.first) {
      return null;
    } else if (this.size === 1) {
      this.first = this.last = null;
      this.size = 0;
    } else {
      this.first = this.first.next;
      this.first.prev = null;
      --this.size;
    }
    return removed.data;
  }

  enqueue(input) {
    const newNode = new Node(input);
    if (!this.first) {
      this.first = this.last = newNode;
    } else {
      newNode.prev = this.last;
      this.last.next = newNode;
      this.last = this.last.next;
    }
    return ++this.size;
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
    let current = this.first;
    let max = this.first;
    while (current !== null) {
      max = max.data < current.data ? current : max;
      current = current.next;
    }
    return max.data;
  }
}

const wordStack = new Stack();
for (let word of words) {
  wordStack.push(word);
}
const numStack = new Stack();
for (let num of nums) {
  numStack.push(num);
}

const wordQueue = new Queue();
for (let word of words) {
  wordQueue.enqueue(word);
}
const numQueue = new Queue();
for (let num of nums) {
  numQueue.enqueue(num);
}

// console.log(wordStack);

module.exports = {
  Node,
  Queue,
  Stack,
};
