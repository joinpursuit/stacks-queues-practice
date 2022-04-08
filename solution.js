const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}

// has "top" prop
// last in, 1st out
class Stack {
  constructor(top = null) {
    this.top = top;
  }

  push(data) {
    const newNode = new Node(data);
    // if the stack is empty
    if (this.size === 0) {
      this.top = newNode;
    } else {
      // when stack isn't empty
      const oldTop = this.top;
      this.top = newNode;
      this.top.next = oldTop;
    }
  }

  pop() {
    // if stack ain't empty
    // store the to be removed node
    // sever the "top" node by make a new "top"
    // decrement the size
    // return the removed node
    if (this.top !== null) {
      const toBeRemovedTop = this.top;
      this.top = toBeRemovedTop.next;
      return toBeRemovedTop;
    }
  }

  size() {
    let length = null;
    let currentNode = this.top;
    for (length = 0; currentNode !== null; length++) {
      currentNode = currentNode.next;
    }
    return length;
  }

  isEmpty() {
    return this.top === null;
  }

  peek() {
    return this.top;
  }

  findMin() {
    let minimum = Infinity;
    let currentNode = this.top;
    while (currentNode !== null) {
      if (currentNode.data < minimum) {
        minimum = currentNode.data;
      }
      currentNode = currentNode.next;
    }
    return minimum;
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
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = null;
  }
  count() {
    return this.size;
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
  getLast() {
    return this.last;
  }
  isEmpty() {
    return this.first === null;
  }
  peek() {
    return this.first;
  }
}

// const stack = new Stack();
// for (const num of nums) {
//   stack.push(num);
// };
// stack.pop();
// stack.pop();
// console.log(stack)
// console.log("the size is: ", stack.size())

// console.log(inspect(stack, {colors: true, depth: nums.length}))

module.exports = {
  Node,
  Queue,
  Stack,
};
