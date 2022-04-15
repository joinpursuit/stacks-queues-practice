const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node{
  constructor(data){// nodes include data & next properties
    this.data = data;
    this.next = null;
  }
}
class Stack{// constructing a stack
  constructor(top = null){// top of stack = null - set to empty as default
    this.top = top; // setting the top value
  }
  push(val){
    let newNode = new Node(val);// creating a new Node with val
    newNode.next = this.top;// 
    this.top = newNode;
  }
  pop(){
    if(this.top === null) return null;
    let temp = this.top;// assigning temp variable to top - pop the value from the top "dog"
    this.top = this.top.next;//moving top to the next value in stack "lazy"
    console.log(temp)
    return temp;
  }
  size(){
    let temp = this.top;// assigning temp to top of stack
    let counter = 0;
    while(temp){
      counter++;// while temp exists, +1 is added
      temp = temp.next; // shifting pointer down the stack
    }
    return counter;
  }
   isEmpty(){
     return !this.top; // if there is no top, stack is empty
   }
   peek(){
     return this.top;// peeking at the top of the stack, returning the value
   }
    findMin(){
      if(this.isEmpty()) return null;// and empty stack returns null
      let temp = this.top;// temp variable set to top
      let min = temp.data;//min is set tp the temp data

      while(temp){// while temp exists
        if(temp.data < min){// if temp.data is less than min
          min = temp.data// min is assigned temp.data
        }
        temp= temp.next;// temp pointer is moved along until the end of stack
      }
      return min;
    }
    convertToArr(){
      let temp = this.top;//setting temp to the top of stack
      let arr = []
      while(temp){//while temp exists
        arr.unshift(temp.data);//temp.data is is pushed into arr***not understanding why the order of arr prints correctly?
        temp = temp.next;// temp pointer is then moved to the next in stack
      }
      console.log(arr)// this returns the arr in the same order as panagram. I thought unshift would return the array in reverse?
      return arr;
    }
    sort(){
      let stackArr = this.convertToArr()// assigning the value of the above method and its values to new variable
      stackArr.sort((a,b)=> (a < b) ? 1 : -1);// sorting decending order
     
      this.top= null; //clearing the stack
      for(let val of stackArr){//looping through sorted stackArr
        this.push(val);// pushing into the stack, last in "brown" first out
      }
    }
}
class Queue{
  constructor(){
    this.first = null;// first is null
    this.last = null;// last is null
    this.size = 0;// there is no size
    this.max= 0;// so max = 0 
  }
  enqueue(val){// adding to queue
    if(val > this.max){// if value is more than max
      this.max = val// max is given the value 
    }
    let newNode = new Node(val);// creating a new node with the value
    if(this.first === null){// if there is no this.first
      this.first = newNode;// this.first is assigned to newNode
    }else{
      this.last.next = newNode;//added to the bottom/ last? of the queue
    }
    this.last = newNode;// this.last is assigned newNode value
    this.size++//size increase after the addition
  }
  dequeue(){
    if(this.first === null);// if there is no first 
    let nodeRemoved = this.first;// assigning a variable to the first node

    if(this.first === this.last){// first = to last only one node remaining
      this.last === null; // clearing the last node?
    }
    this.first = this.first.next;//// moving to the next node
    this.size--;// reducing size

    if(nodeRemoved.data === this.max){ // if nodeRemoved data is = to max value
      this.max = this.findMax()// assigning a new max after removing max node 
    }
    return nodeRemoved.data;
  }
  getLast(){
    return this.last;
  }
  peek(){
    return this.first;
  }
  isEmpty(){
    return this.first === null;
  }
  count(){
    let temp = this.first;// placeholder for first
    let counter= 0;
    while(temp){// while temp exists
      counter++// count up
      temp = temp.next// move to the next after counting 
    }
    return counter;
  }
  findMax(){
    let temp = this.first;// setting temp to first value 
    let  max = 0;
    while(temp){// while temp exists
      if(temp.data > max){// if temp.data is greater than max 
        max = temp.data;// assign max the higher value
      }
      temp = temp.next;// temp is moved to the next in queue
    }
    return max
  }
}
  
  
 




module.exports = {
  Node,
  Queue,
  Stack,
};
