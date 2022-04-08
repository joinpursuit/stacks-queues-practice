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

    isEmpty() {
        return this.top === null;
    }

    push(data) {
        const newItem = new Node(data);
        newItem.next = this.top;
        this.top = newItem;
    }

    peek() {
        if (this.top == null) {
            throw new Error("The stack is empty");
        }
        return this.top;
    }

    pop() {
        if (this.top == null) {
            throw new Error("The stack is empty");
        }
        let item = this.top;
        if (item) {
            let newItem = item.next;
            this.top = newItem;
            return item;
        }
    }

    size() {
        let count = 0;
        let temp = this.top;
        while (temp) {
            count++;
            temp = temp.next;
        }
        return count;
    }

    findMin() {
        let temp = this.top;
        let min = temp.data;
        while (temp) {
            if (min > temp.data) {
                min = temp.data;
            }
            temp = temp.next;
        }
        return min;
    }

    toArray() {
        let array = [];
        let temp = this.top;
        while (temp) {
            array.push(temp.data);
            temp = temp.next;
        }

        return array;
    }

    sort() {
        //min at top
        let tempStack = new Stack();
        let input = this;

        while (input.size() > 0) {
            let temp = input.pop().data;

            while (tempStack.size() > 0 && tempStack.top.data < temp) {
                input.push(tempStack.top.data);
                tempStack.pop();
            }

            tempStack.push(temp);
        }
        this.top = tempStack.pop();
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(data) {
        let newItem = new Node(data);
        if (!this.first) {
            this.first = newItem;
            this.last = newItem;
        } else {
            this.last.next = newItem;
            this.last = newItem;
        }
        return ++this.size;
    }
    isEmpty() {
        return this.first === null;
    }
    dequeue() {
        if (this.first == null) {
            throw new Error("The queue is empty");
        }
        const item = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return item.data;
    }
    peek() {
        if (this.first == null) {
            throw new Error("The queue is empty");
        }
        return this.first;
    }
    count() {
        let count = 0;
        let temp = this.first;
        while (temp) {
            count++;
            temp = temp.next;
        }
        this.size = count;
        return count;
    }
    getLast() {
        return this.last;
    }
    findMax() {
        let max = this.first.data;
        let temp = this.first.next;
        while (temp) {
            if (temp.data > max) {
                max = temp.data;
            }
            temp = temp.next;
        }
        return max;
    }
}

// let queue = new Queue();
// console.log(queue.isEmpty());
// for (let i = 0; i < words.length; i++) {
//     queue.enqueue(words[i]);
// }

// console.log(inspect(queue, { colors: true, depth: 12 }));
// console.log(queue.first);
// console.log(queue.last);
// console.log(queue.isEmpty());
module.exports = {
    Node,
    Queue,
    Stack,
};
