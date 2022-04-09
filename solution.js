const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next
  }
} 

  class Stack {
    constructor(top = null){
      this.top = top
    }

    push(data){
      let node = new Node(data)
      node.next = this.top
      this.top = node
    }

    size(){
      let node = this.top
      let count = 0
      while(node !== null){
        count++
        node = node.next
      }
      return count
    }

    pop(){
      let node = this.top
      this.top = this.top.next
      return node
    }

    isEmpty(){
      return this.top === null
    }

    peek(){
      return this.top
    }

    findMin(){
      let min = this.top.data 
      let currentNode = this.top.next
      while(currentNode !== null){
        if(min > currentNode.data){ 
          min = currentNode.data
        }
        currentNode = currentNode.next
      }    
      return min
    }

    sort(){
      //create an array with all the data
      //sort the array that we just created
      //create a for loop to create a new stack
      //set this.top to the newstack.top
      //return this
      let array = [] 
      let currentNode = this.top
      while(currentNode !== null){
        array.push(currentNode.data)
        currentNode = currentNode.next
      }
        array.sort().reverse()
        let newStack = new Stack()
        for(let i = 0; i < array.length; i++){
          newStack.push(array[i])
        }
        this.top = newStack.top
        console.log(this)
        return this
    }

  }

  class Queue{
    constructor(){
      this.first = null; 
      this.last = null; 
      this.size = 0;
      this.max = null;
    }

    enqueue(data){
      let newNode = new Node(data)
      if(this.first === null){
        this.first = newNode
        this.last = newNode
      } else {
        this.last.next = newNode
        this.last = newNode
      }
      this.size++
    }
    
    dequeue(){
      let firstOut = this.first.data
      this.first = this.first.next
      this.size--
      this.max = null
      return firstOut
    }

    count(){
      return this.size
    }

    isEmpty(){
      return this.first === null
    }

    peek(){
      return this.first
    }

    getLast(){
      return this.last
    }

    findMax(){
      if(this.max){
        return this.max
      }
      let max = this.first.data 
      let currentNode = this.first.next
      while(currentNode !== null){
        if(max < currentNode.data){ 
          max = currentNode.data
        }
        currentNode = currentNode.next
      } 
      this.max = max   
      return this.max
    }

  }

module.exports = {
  Node,
  Queue,
  Stack,
};
