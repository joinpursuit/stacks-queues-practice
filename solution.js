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
		let newNode = new Node(value);
		newNode.next = this.top;
		this.top = newNode;
	}

	pop() {
		if (this.top === null) {
			return null;
		}
		let temp = this.top;
		this.top = temp.next;
		return temp;
	}

	size() {
		let current = this.top;
		let count = 0;
		while (current) {
			count++;
			current = current.next;
		}
		return count;
	}
	isEmpty() {
		if (this.top === null) {
			return true;
		}
		return false;
	}
	peek() {
		return this.top;
	}

	findMin() {
		let current = this.top;
		let min = 0;
		while (current) {
			if (current < min) {
				min = current.data;
				current = current.next;
			} else {
				current = current.next;
			}
		}
		return min;
	}

	sort() {
		let arr = [];
		let current = this.top;
		while (current) {
			arr.push(current.data);
			current = current.next;
		}
		let sorted = arr.sort();
		let firstNode = new Node(sorted[0]);
		let stack = new Stack(firstNode);

		for (let i = 0; i < sorted.length; i++) {
			let currentNode = new Node(sorted[i]);
			firstNode.next = currentNode;
			firstNode = currentNode;
		}
		stack = this.top;
		return stack;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
	}
	enqueue(value) {
		let newNode = new Node(value);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
	}

	dequeue() {
		if (!this.first) {
			throw new Error("Can't remove from empty queue");
		}
		if (this.first === this.last) {
			this.last = null;
		}
		let temp = this.first;
		this.first = this.first.next;
		return temp.data;
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

	count() {
		let current = this.first;
		let count = 0;
		while (current) {
			count++;
			current = current.next;
		}
		return count;
	}

	findMax() {
		let max = 0;
		let current = this.first;
		while (current.next !== null) {
			if (current.data > max) {
				max = current.data;
				current = current.next;
			} else {
				current = current.next;
			}
		}
		return max;
	}
}

module.exports = {
	Node,
	Queue,
	Stack,
};
