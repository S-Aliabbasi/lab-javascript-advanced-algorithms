class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if (this.MAX_SIZE == this.queueControl.length) return false;
    else return true;
  }

  isEmpty() {
    if (this.queueControl.length == 0) return false;
    else return true;
  }

  enqueue(item) {
    if (this.canEnqueue()) this.queueControl.push(item);
    else return "Queue Overflow";
  }

  dequeue() {
    if (this.isEmpty()) this.queueControl.pop();
    else return "Queue Underflow";
  }

  display() {
    return this.queueControl;
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== "undefined") module.exports = Queue;
