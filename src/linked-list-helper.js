class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
    const newNode = { value, next: null };
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  removeHead() {
    if (!this.head) return null;
    const head = this.head;
    this.head = this.head.next;
    return head.value;
  }

  contains(value) {
    let current = this.head;
    while (current.next) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  // helper method
  forEach(cb) {
    if (!this.head) return;
    let current = this.head;
    cb(current);
    while (current.next) {
      current = current.next;
      cb(current);
    }
  }
}
module.exports = LinkedList;
