const { nums, words } = require("./data/data.js");
const { inspect } = require("util");
const { threadId } = require("worker_threads");

class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = 0
  }

  // methods
  // Count size of queue
  /*
    1. Node is set to the first item
    2. While there are nodes...
    3. the size is already being tracked, so size increases by 1, each time in the while loop.
    4. the pointer for the first item is moved to node.next
    5. Returning the size, which has increased one time every time there has been a node..
  */
  count(){
    let node = this.first;
    while (node){
      this.size++;
      node = node.next;
    }
    return this.size;
  }
  // Can remove from queue using dequeue method
  /*
    1. Guard clause - If there is no first, the queue is empty.
    2. If the first and last are the same, there's just one node.
    3. Set the one node to null.
    4. Let node be the first.
    5. Move the pointer to first to be the next.
    6. Return the node data.
  */
  dequeue(){
    if (!this.first){
      throw new Error("Can't remove from empty queue");
    }
    if (this.first === this.last){
      this.last = null;
    }
    let node = this.first;
    this.first = this.first.next;
    return node.data;
  }
  // Can add to queue using enqueue method
  /*
    1. Create a new instance of a Node with the data passed in.
    2. If there is no `first item`...
    3. Set the `first item` and `last item` to the `new node`.
    4. else, set the pointer of the last item to be the `new node`
    5. the last item is set to the new node.
  */
  enqueue(data){
    let newNode = new Node(data);
    if (!this.first){
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
  }
  // findMax data value
  findMax(){
    let node = this.first;
    let max = this.first.data;
    while (node){
      if (max < node.data){
        max = node.data;
      }
      node = node.next;
    }
    return max;
  }

  // getLast node
  /*
    1. Let node equal the first item
    2. While there is a node... the pointer for node points to node.next
    3. if the next node is null, that is the last one in the list. So return the node.
  */
  getLast(){
    let node = this.first;
    while (node){
      node = node.next;
      if (node.next === null){
        return node;
      }
    }
  }

  // isEmpty check if list is empty
  isEmpty(){
    return this.first === null;
    // if (this.first === null){
    //   return null;
    // }
  }

  // peek the first node
  peek(){
    return this.first;
  }
}

class Stack {
  constructor(top = null){
    this.top = top;
  }
  // Methods
  /*
    1. create a new node
    2. the next new node points to the top of the stack.
    3. the top of the stack is now the new node.
  */
  push(value){
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }
  /*
    1. Set a counter to zero, to start size at zero.
    2. node is at the top.
    3. while there is a node, increase the count by 1.
    4. node points to the next node. continue while loop.
    5. Return count, which has increased once every time there was a node.
   */
  size(){
    let count = 0;
    let node = this.top;
    while (node){
      count++;
      node = node.next;
    }
    return count;
  }
  /*
    1. Guard clause - if the top is null, there's nothing in the list.
    2. Return null, because the list is empty.
    3. set node to the top.
    4. While there is a node in the list...
    5. This.top is reassigned to the pointer for the next node.
    6. Because the pointer for top shifts to the next node, the original top is abandoned. Returning the node.
  */
  pop(){
    if (this.top === null){
      return null;
    }
    let node = this.top;
    if (node){
      this.top = node.next;
    }
    return node;
  }
  // check if list is empty
  /*
    1. If the top is null, there is nothing in the list.
    2. Return true if there's nothing.
    3. Else, return false if there is a value.
  */
  isEmpty(){
    if (this.top === null){
      return true;
    } else {
      return false;
    }
  }
  // findMin data value
  /*
    1. set node to be the top.
    2. while there is a node,
    3. Check to see if the node is smaller than the next node.
    4. If the node is smaller, set the head to be the smaller node.

  */
  findMin(data){
    /*
        (2) (3) (1) (5) (4)

      1. take the top and the next.
       -- While there is a node --
      2. if the first (2) is smaller than next (3),
      3. keep the first (2) and throw away next (3) by moving pointer of `next` to the `next.next` one.
      4. top = (2) and next is (1).
            (3) was removed

        (2) --> (1) (5) (4)

      4. if the first (2) is bigger than next (1),
      5. keep the next (1) and throw away the first (2), by moving pointer to `next` (like pop)
            (2) was removed
      
             --> (1) (5) (4)
      */
     let node = this.top;
    while (node){
      if (this.top < node.next){
        node.next = node.next.next;
      } else if (this.top > node.next){
        this.top = node.next;
      }
      return node.data;
    }
  }
  // peek top node
  /*
    1. Guard clause - if the top is null, the list is empty. Throw an error.
    2. See the value of the top node's data by returning it
  */
  peek(){
    if (this.top === null){
      throw new Error("Error: The stack is empty ");
    }
    return this.top;
  }
  // sort - sort the stack into ascending order. CHALLENGE only use stacks to achieve this (no arrays or objects etc.)
  /*
    The     brown
    quick   dog
    brown   fox
    fox     jumps
    jumps   lazy
    over    over
    the     quick
    lazy    The        
    dog     the

    1. Take first word, and iterate through the `next nodes`, until...
    2. the first word is greater than >= or equal to the next node.
    3. If it is, put that node there.
    4. If there are no nodes greater than the first node, set this node to null.
    Set this node to be the `first node` in the `newStack`.

  */
  sort(){
    let node = this.top;
    let min = this.top
    // while there are nodes
    while(node){
      if (node.data < min.data){
        min = node;
      }
      node = node.next;
    }
    min.next = this.top;
    this.top = min;
    return min;
  }
}

// let myStack = new Stack();
// myStack.push("Oh my...");
// myStack.push("Bears");
// myStack.push("Tigers");
// myStack.push("Lions");
// myStack.sort();
// console.log("end:", myStack);

module.exports = {
  Node,
  Queue,
  Stack,
};
