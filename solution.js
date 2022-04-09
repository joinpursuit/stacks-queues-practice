const { nums, words } = require("./data/data.js");
const { inspect } = require("util");


class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {

  constructor(){
    this.top = null;
    // this.length = 0;
}

  //Push Method
  push(data){
    const newNode = new Node(data);

    if(!this.top) {
      this.top = newNode;
    } else {
      let temp = this.top;
      this.top = newNode;
      this.top.next = temp;
    }
    // return ++this.length;
  }

  pop() {

    if(!this.top) return null;

    let temp = this.top;
    
    //In case there is only one element in the Stack
    if(this.top === this.top.next) {
      this.top = null;
    }

    this.top = this.top.next;

    return temp;
  }

  reset() {
    this.top = null;
  }

  size() {

    let counter = 0;
    let current  = this.top;
    while(current) {
      counter++;
      current = current.next;
    }
    return counter;
  }

  isEmpty() {
    return !this.top && true;
  }

  peek() {
    return this.top; 
  }

  findMin() {

    // starting point
    let min = this.top.data;
    let node = this.top;

    // Loop as long as node exists in the Stack
    while(node) {
      if(min > node.data) {
        min = node.data
      }
      // Keep the loop moving
      node = node.next;
    }
    return min
  }

  findMax() {
    // starting point
    let max = this.top.data;
    let node = this.top;

    // Loop as long as node exists in the Stack
    while(node) {
      if(max < node.data) {
        max = node.data
      }
      // Keep the loop moving
      node = node.next;
    }
    return max
  }

  toArray() {
    const arr=[];
    let node = this.top
    
    while (node) {
      arr.push(node.data)
      node = node.next;
    }
    return arr
   }
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
              // T                           M
  sort() {
    console.log(this)
    let convertedToArray = this.toArray()
    
    let sorted = convertedToArray.sort((a,b) => b.charCodeAt(0) - a.charCodeAt(0))
    console.log(sorted)
    // let newStack = new Stack()
    
    this.reset()

    for(const each of sorted) {
      console.log(this.size())
      this.push(each)
    }
    
    // let max = this.top.data
    // let count = 0;
    // let length = this.size()
    // console.log(length)
    // while(newStack.size() !== length) {

    //   if (max < current.data) {
    //     max = current.data

    //   }
    //   if (newStack.size()  === length) {
    //     newStack.push(this.findMin())
    //     break;
    //   }

     
    //   console.log("new Stack: ", newStack, "order:", count)
    //   current = current.next;
    // }
 
    // console.log("After New Stack: ", newStack)
    console.log(inspect(this, {colors:true, depth: 12}))
    return this
    
  }
}



// --- --- --- --- --- --- --- --- QUEUE --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---



class Queue {

  constructor(){
    this.first = null;
    this.last =  null;
    this.size = 0;
    this.max = 0;
}

  // Adding 
  enqueue(data) {

    const newNode = new Node(data)

    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;                          
    }
    this.size++

  }

  dequeue() {

    if (!this.first) {
      throw new Error("Nothing in the stack")
    }

    if (this.first === this.last) {
        this.last = null;
    }

    let temp = this.first
    this.first = this.first.next;
    this.size--
    return temp.data;
  }

  count() {
    return this.size;
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
    
    let max = this.first;
    let temp = this.first
    while (temp) {

      if(max.data < temp.data) {
        max = temp;
      }
     temp = temp.next;
    } 

    return max.data;
  }




}


// --- --- --- --- --- --- --- --- THE END --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---



module.exports = {
  Node,
  Queue,
  Stack,
};
