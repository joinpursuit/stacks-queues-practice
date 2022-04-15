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
    this.length = 0;
  }

  isEmpty() {
    return this.top === null;
  }

  push(data) {
    //turn the data into a node
    let newItem = new Node(data);
    // console.log(newItem);
    //declare the next of the new node is the old top
    newItem.next = this.top;
    //declare the new node to be the top
    this.top = newItem;
    //newItem = this.top reverses the order so the top becomes the bottom
    // newItem = this.top;
    //add to the length
    this.length++;
  }

  size() {
    return this.length;
  }

  findMin() {
    //store the top node in a variable
    let node = this.top;
    //declare a minumum value variable which is the top's data
    let minValue = this.top.data;
    //while there is a node that is present
    while (node !== null) {
      //check to see if the nodes data is less than minimum value stored
      if (node.data < minValue) {
        //if is then store it in the min value variable
        minValue = node.data;
      }
      //update the node to continue the loop
      node = node.next;
    }
    return minValue;
  }

  peek() {
    return this.top;
  }

  //removes the last element
  //in stacks, first one in last one out
  //taking off the top
  pop() {
    //storing the original top
    //declaring the new top to be the original this.top.next
    let original = this.top;
    this.top = original.next;
    this.length--;
    return original;
  }

  // addToOrganizingStack(data) {

  //   let newItem = data;
  //   newItem.next = this.top;
  //   this.top = newItem
  // }

  sort() {
    let node = this.top;
    let sortedArray = [];
    while (node) {
      sortedArray.push(node.data);
      node = node.next;
    }
    // console.log(sortedArray);
    sortedArray.sort((a, b) => {
      if (a.toLowerCase() < b.toLowerCase()) {
        return 1;
      }
      if (a.toLowerCase() > b.toLowerCase()) {
        return -1;
      }
      return 0;
    });
    // console.log(sortedArray);
    const newStack = new Stack();
    for (const eachValue of sortedArray) {
      newStack.push(eachValue);
    }
    // console.log(this);
    this.top = newStack.top;

    // console.log(newStack);
    return this;

    // addToOrganizingStack(largerNode)
  }
}

const numStack = new Stack();

for (const eachNumber of words) {
  numStack.push(eachNumber);
}

console.log(numStack.sort());
// console.log(wordStack.pop());

// console.log(numStack.sort());
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = null;
  }
  enqueue(data) {
    let newItem = new Node(data);
    if (this.size === 0) {
      this.first = newItem;
      this.last = newItem;
    }
    this.last.next = newItem;
    this.last = newItem;
    return this.size++;
  }
  dequeue() {
    let original = this.first;
    if (original === this.last) {
      this.last = this.last.next;
    }
    let newFirst = original.next;
    this.size--;
    this.first = newFirst;
    return original.data;
  }
  count() {
    return this.size;
  }

  findMax() {
    this.max = this.first.data;
    let node = this.first;
    while (node !== null) {
      // console.log(node);
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

// console.log(Queue);
module.exports = {
  Node,
  Queue,
  Stack,
};
