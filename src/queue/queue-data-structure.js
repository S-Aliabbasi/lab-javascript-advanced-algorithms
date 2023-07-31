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
    if (this.queueControl.length == 0) return true;
    else return false;
  }

  enqueue(item) {
    if (this.canEnqueue()) {
      this.queueControl.push(item);
      return this.queueControl;
    } else return "Queue Overflow";
  }

  dequeue() {
    if (!this.isEmpty()) return this.queueControl.pop();
    else return "Queue Underflow";
  }

  display() {
    return this.queueControl;
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== "undefined") module.exports = Queue;
