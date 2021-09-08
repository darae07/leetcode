// search
// addFirst, addLast, addIndex
// get, set, indexOf, contains
// remove(head), remove(index), remove(value)
// size, isEmpty, clear

class DoublyLinkedList {
  head = null;
  tail = null;
  size = 0;

  search(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("index out exception");
    }
    if (index <= this.size / 2) {
      let node = this.head;
      for (let i = 0; i <= this.size / 2; i++) {
        if (i === index) {
          return node;
        }
        node = node.next;
      }
    } else {
      let node = this.tail;
      for (let i = this.size - 1; i >= 0; i--) {
        if (i === index) {
          return node;
        }
        node = node.prev;
      }
    }
  }

  addFirst(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    if (!this.tail) {
      this.tail = node;
    }
    this.size++;
  }

  addLast(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
    if (!this.head === this.tail && !this.head.next) {
      this.head.next = node;
      node.prev = this.head;
    }
    this.size++;
  }

  addIndex(index, value) {
    const node = new Node(value);

    if (index < 0 || index >= this.size) {
      throw new Error("index out exception");
    }
    let prev = null;
    if (index === 0) {
      prev = this.head;
    } else {
      prev = this.search(index - 1);
    }

    node.next = prev.next;
    node.prev = prev;
    prev.next = node;
    this.size++;
  }

  remove(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("index out exception");
    }
    this.size--;
    if (!index) {
      const val = this.head.value;
      this.head = this.head.next;
      this.head.prev = null;
      return val;
    }
    let prev = this.search(index - 1);
    const val = prev.next.val;
    prev.next = prev.next.next;

    if (index === this.size) {
      this.tail = prev;
    } else {
      prev.next.prev = prev;
    }
    return val;
  }

  removeVal(value) {
    if (this.head.value === value) {
      this.head = this.head.next;
      this.head.prev = null;
      this.head.next.prev = this.head
      this.size--;
      return;
    }
    let prev = this.head;
    while (prev.next) {
      if (prev.next.value === value) {
        prev.next = prev.next.next;
        if (prev.next) {
          prev.next.prev = prev;
        } else{
          this.tail = prev
        }
        this.size--;
        return;
      }
      prev = prev.next;
      if (!prev.next) {
        this.tail = prev;
      }
    }
    throw new Error("can't find value");
  }

  size() {
    return this.size;
  }

  isEmpty() {
    return !this.head;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    return;
  }
}
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

const list = new DoublyLinkedList();
list.addLast(1);
list.addFirst(3);
list.addIndex(1, 4);
list.removeVal(1)
console.log(list)