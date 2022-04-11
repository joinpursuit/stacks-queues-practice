const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
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
    let node = this.top;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  isEmpty() {
    return this.top === null;
  }
  peek() {
    if (this.top === null) {
      throw new Error("This stack is empty");
    }
    return this.top;
  }

  findMin() {
    let min = this.top.data;
    let currentNode = this.top.next;
    while (currentNode !== null) {
      if (min > currentNode.data) {
        min = currentNode.data;
      }
      currentNode = currentNode.next;
    }
    return min;
  }

  sort() {
    //create an array with all the data
    //sort the array that we just created
    //create a for loop to create a new stack
    //set this.top to the newstack.top
    //return this
    let array = [];
    let currentNode = this.top;
    while (currentNode !== null) {
      array.push(currentNode.data);
      currentNode = currentNode.next;
    }
    array.sort().reverse();
    let newStack = new Stack();
    for (let i = 0; i < array.length; i++) {
      newStack.push(array[i]);
    }
    this.top = newStack.top;
    console.log(this);
    return this;
  }
}

class Queue {
  constructor() {
    //initially our line is empty
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = null;
  }

  count() {}

  isEmpty() {
    //if our first is  equal to null then our queue is empty
    return this.first === null;
  }

  //we are adding data
  //enqueue should return the new size
  enqueue(data) {
    //creating a new instance of node with data being past
    let newItem = new Node(data);
    //if there is no one on line make them the first person
    //otherwise make them last
    if (!this.first) {
      //the first person if they are the only one will be first and last
      this.first = newItem;
      this.last = newItem;
    } else {
      //below is us updating what is last
      //using our current last will point to the newest last
      this.last.next = newItem;
      //set the newest last the actual value
      this.last = newItem;
    }

    return ++this.size;
  }

  dequeue() {
    let firstOut = this.first.data;
    this.first = this.first.next;
    this.size--;
    return firstOut;
  }

  count() {
    return this.size;
  }

  peek() {
    return this.first;
  }

  getLast() {
    return this.last;
  }

  findMax() {
    let max = this.first.data;
    let currentNode = this.first.next;
    while (currentNode !== null) {
      if (max < currentNode.data) {
        max = currentNode.data;
      }
      currentNode = currentNode.next;
    }
    return max;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
