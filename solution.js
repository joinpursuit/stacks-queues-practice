const { nums, words } = require("./data/data.js");
const { inspect } = require("util");
const { throws } = require("assert");
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

// const words = [
//   "the",
//   "quick",
//   "brown",
//   "fox",
//   "jumps",
//   "over",
//   "the",
//   "lazy",
//   "dog",
// ];

class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}
  // - `first`
  // - `last`
  // - `size`
  // - `max` value
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    // this.size = 0;
    this.max = 0;
  }

  count () {
    // return this.size;

    let temp = this.first;
    let counter = 0;
    while(temp) {
      counter++;
      temp = temp.next;
    }
    return counter;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if(!this.first) {
      this.first = newNode;
    
    } else {
      this.last.next = newNode;
      
    }
    this.last = newNode;
    // this.size++;
  }

  dequeue(){
    if(!this.first) return null;
    let temp = this.first;
    
    if(this.first === this.last) {
      this.first = null;
    }
    this.first = this.first.next;
    
    // this.size--;
    return temp.data; 
  }


  peek(){
    return this.first;
  }

  getLast() {
    return this.last;
  }

  isEmpty(){
    return !this.first;
  }



  findMax() {
    let temp = this.first;
    // let max = -Infinity;
    // let max = this.first.data;
    let max = 0;
    while(temp) {
      if(temp.data > max) {
        max = temp.data;
      }
      temp = temp.next;
    }
    return max;
  }
}


//============================================== 
class Stack {
  constructor (top = null) {
    this.top = top;
  }

  peek(){
    return this.top;
  }

  push(value){
    let newNode = new Node(value);
    // console.log(newNode)
    newNode.next = this.top;
    // console.log(newNode.next)
    // console.log(newNode)
    this.top = newNode;
    // console.log(this.top)
  };

  size(){
    let count = 0;
    let node = this.top;
    while(node){
      count++;
      node = node.next;
    };
    return count;
  };

  pop(){
    if(!this.top) return null;
    let temp = this.top;
    // console.log(temp);
    this.top = this.top.next;
    // console.log(this.top)
    // console.log(temp)
    return temp;
  }

  isEmpty(){
    // return this.top === null;
    return !this.top;
  }

  findMin(){
    if(this.isEmpty()) return null;
    let currentNode = this.top;
    let min = currentNode.data;
    
    while(currentNode){
    
        if(currentNode.data < min) {
            min = currentNode.data;
        } 
        currentNode = currentNode.next;
    }
    return min;
  }

  sort() {
    let current = this.top;
    while (current.next) {
      let next = current.next;
      if (current.data > next.data) {
        let temp = current.data;
        current.data = next.data;
        next.data = temp;
        current.next = next;
      }
      current = current.next;
    }
   let node = this.top;
    while (node.next) {
      if (node.data > node.next.data) {
        return this.sort();
      }
      node = node.next;
    }
    return this.top
  }
}

// let stack = new Stack();
// console.log(stack.push("Hi"))
// console.log(stack.push("Lili"))
// console.log(stack.pop())


module.exports = {
  Node,
  Queue,
  Stack,
};
