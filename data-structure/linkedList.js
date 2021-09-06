// search
// addFirst, addLast, addIndex
// get, set, indexOf, contains
// remove(head), remove(index), remove(value)
// size, isEmpty, clear

class LinkedList {
  haed = null;
  tail = null;
  size = 0;

  search(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("index out exception");
    }
    let node = this.haed;
    for (let i = 0; i < this.size; i++) {
      if (i === index) {
        return node;
      }
      node = node.next;
    }
  }

  addFirst(value) {
    const node = new Node(value);
    node.next = this.haed;
    this.haed = node;
    if (!this.tail) {
      this.tail = node;
    }
    this.size++;
  }

  addLast(value) {
    const node = new Node(value);
    if (!this.haed) {
      this.haed = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    if (!this.haed.next) {
      this.haed.next = node;
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
      prev = this.haed;
    } else {
      prev = this.search(index - 1);
    }

    node.next = prev.next;
    prev.next = node;
    this.size++;
  }

  remove(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("index out exception");
    }
    this.size--;
    if (!index) {
      const val = this.haed.value;
      this.haed = this.haed.next;
      return val;
    }
    const prev = this.search(index - 1);
    const val = prev.next.val;
    prev.next = prev.next.next;
    if (!prev.next.next) {
      this.tail = prev;
    }
    return val;
  }

  removeVal(value) {
    if (this.haed.value === value) {
      this.haed = this.haed.next;
      this.size--;
      return;
    }
    let prev = this.haed;
    while (prev.next) {
      if (prev.next.value === value) {
        prev.next = prev.next.next;
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

  get(index) {
    return this.search(index).value;
  }

  set(index, value) {
    let node = this.search(index);
    node.value = value;
    return;
  }

  indexOf(value) {
    let node = this.haed;
    let i = 0;
    while (node) {
      if (node.value === value) {
        return i;
      }
      node = node.next;
      i++;
    }
    return -1;
  }

  contains(value) {
    return this.indexOf(value) !== -1;
  }

  getSize() {
    return this.size;
  }
  isEmpty() {
    return this.haed === null;
  }
  clear() {
    this.haed = null;
    this.tail = null;
    this.size = 0;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const list = new LinkedList();
list.addLast(1);
list.addFirst(3);
list.addIndex(1, 4);
list.remove(1);
list.removeVal(3);
list.addLast(5);
list.addLast(6);
list.addLast(7);
list.addIndex(3, 4);
const a = list.search(0);
console.log(a);
console.log(list.get(4));
list.set(4, 8);
console.log(list.get(4));
console.log(list.getSize())
console.log(list.isEmpty());
list.clear();
console.log(list.isEmpty());