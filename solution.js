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
  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }
  size(){
    let count = 0;
    let temp = this.top;
    while (temp) {
             count++;
             temp = temp.next;
    }
    return count;
  }
  pop() {
    if (this.top === null) return null; 
    let temp = this.top;
    this.top = this.top.next;
    return temp;
}
  isEmpty() {
    return this.top === null;
  }
  findMin() {
    let node = this.top;
    while (node) {
      if (this.top < node.next) {
        node.next = node.next.next;
      } else if (this.top > node.next) {
        this.top = node.next;
      }
      return node.data;
    }
  }
  peek() {
    return this.top;
  }
  sort() {
    let node = this.top;
    let min = this.top;
    while(node) {
      if (node.data < min.data) {
        min = node;
      }
      node = node.next;
    }
    min.next = this.next;
    this.top  = min;
    return min;
  }
}

// class Node {
//   constructor(data) {
//   this.data = data;
//   this.next = null;
//  }
// }
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = 0;
  }
   count() {
     let node = this.first;
     while(node){
       this.size++;
       node = node.next;
     }
     return this.size;
   }

   dequeue() {
      if (!this.first) {
        throw newError("Can't remove from empty queue");
      }
      if (this.first === this.last) {
          this.last = null;
      } 
        let temp = this.first;
        this.first = this.first.next;
        return temp.data;
   }
   enqueue(value) {
      let newNode = new Node(value);
      if(!this.first) {
        this.first = newNode;
        this.last = newNode;
      } else {
        this.last.next = newNode;
        this.last = newNode;
      }
   }
   findMax() {
      let temp = this.first.next;
      let node = this.first.data;
      while (temp) {
        if (temp.data > node) {
          node = temp.data;
        }
        temp = temp.next;
      }
      return node;
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

module.exports = {
  Node,
  Queue,
  Stack,
};
