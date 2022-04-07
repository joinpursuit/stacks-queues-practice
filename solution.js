const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
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
    this.size;
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
    let current = this.top;
    while (current) {
        count++;
      current = current.next;
    }
    return count;
  }

  sort(){
    let current = this.top
    console.log(current)
  }
isEmpty(){
  return this.top === null
}

peek(){
  return this.top
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

sort(){
  //make array of data from stack
  const array = []
  let currentNode = this.top
  while(currentNode){
    array.push(currentNode.data)
    currentNode = currentNode.next
  }
  //sort array
  array.sort().reverse()
  const newStack = new Stack()
  //use while loop to create `newStack`
  for(let i = 0; i < array.length; i++){
      newStack.push(array[i])
  }
  this.top = newStack.top
  return this
 }
}

class Queue {
    constructor(){
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
