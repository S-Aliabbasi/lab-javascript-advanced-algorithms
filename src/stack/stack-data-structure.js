class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.MAX_SIZE == this.stackControl.length) return false;
    else return true;
  }

  isEmpty() {
    if (this.stackControl.length == 0) return true;
    else return false;
  }

  push(item) {
    if (this.canPush()) {
      this.stackControl.push(item);
      return this.stackControl;
    } else {
      return "Stack Overflow";
    }
  }

  pop() {
    if (!this.isEmpty()) return this.stackControl.pop();
    else {
      return "Stack Underflow";
    }
  }

  display() {
    return this.stackControl;
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== "undefined") module.exports = Stack;
