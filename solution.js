const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(top = null){
    this.top = top;
  }

  push(data){
    const newStack = new Node(data);
    newStack.next = this.top;
    this.top = newStack;
  }

  pop(){
    const oldTop = this.top
    if(oldTop !== null) {
      let newTop = oldTop.next;
      this.top = newTop;
      return oldTop;
    }
  }

  size(){
    let valueOfSize = 0; //> output: number
    // console.log(inspect(this.top, {color: true, depth:12}))

    //> start of the stack
    let currentNode = this.top; 

    //> looping you can access at the items
    while(currentNode !== null) { 
      valueOfSize++; //> incrementing
      
      //> updating using pointers
      currentNode = currentNode.next; 
      // console.log(inspect(currentNode, {color: true, depth:12}))
    }

    // console.log(valueOfSize)
    return valueOfSize; //> return number
  }

  isEmpty() {
    return this.top === null;
  }

  peek() {
    return this.top;
  }

  findMin() {
    //> output: number
    let minimum = this.top.data; 
    // console.log(minimum)

    let currentItem = this.top //> start
    while(currentItem !== null) {
      //> compare a number to a number
      //> 0 < 0
      if (currentItem.data < minimum) {
        minimum = currentItem.data;
      }
      currentItem = currentItem.next //> update
    }

    return minimum; //> return a number
    // def of traversing moving through the linked list
  }

  sort() {
    //> start, ..., next
    let minimumValue = this.top; 
    console.log(minimumValue)

    let currentItem = this.top //> start
    console.log(currentItem)
    while(currentItem !== null) {
      //> compare a `number` to a `number`
      //> 0 < 0
      if (currentItem.data < minimumValue.data) {
        minimumValue = currentItem;
        // console.log(minimumValue)
      }
      //> next item
      currentItem = currentItem.next 
      // console.log(currentItem)
    }
    minimumValue.next = this.top
    this.top = minimumValue
    // console.log(this.top)
    
    return minimumValue; 
    // moving through the linked list
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
    this.maxValue = 0;
  }

  enqueue(data){
    let newNode = new Node(data);
    if(this.first === null){
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  // FIFO
  dequeue() {
    // store the first person in a variable
    // use this.first
    const oldFirst = this.first;
    if(oldFirst === null) {
      throw new Error("This queue is empty")
    }
    if(oldFirst === this.last) {
      this.last = null;
    }
    this.first = oldFirst.next 
    this.size--;
    return oldFirst.data;
  }

  count() {
    return this.size;
  }

  // this is returning true or false
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
    //> output: number
    let maximum = this.first.data; 
    // console.log(maximum)

    let currentItem = this.first //> start
    while(currentItem !== null) {
      //> compare a number to a number
      //> 10 > 8
      if (currentItem.data > maximum) {
        maximum = currentItem.data;
      }
      currentItem = currentItem.next //> update
    }

    return maximum; //> return a number
    // moving through the linked list
  }
}

// const numStack = new Stack(); 
// for (let num of nums) {
//   numStack.push(num);
// }
// console.log(inspect(numStack, {color: true, depth:12}))
// console.log(numStack.pop())
// console.log(numStack.size())

module.exports = {
  Node,
  Queue,
  Stack,
};
