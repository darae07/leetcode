// get
// put
// delete

class HashTable {
  constructor(size = 5) {
    this.bukets = new Array(size);
    this.size = size;
    this.count = 0;
  }

  hashFunction(key) {
    return (
      key
        .toString()
        .split("")
        .reduce(function (a, b) {
          a = (a << 5) - a + b.charCodeAt(0);
          return a & a;
        }, 0) % this.size
    );
  }

  resize(type) {
    const sizeDic = {upSize: 2, downSize: 0.5};
    this.size = this.size * sizeDic[type];
    const oldBuket = this.bukets;
    this.bukets = new Array(this.size);
    oldBuket.forEach((node) => {
      if (node) {
        this.put(node.key, node.value);
        let next = node.next;
        while (next) {
          this.put(next.key, next.value);
          let n = next;
          next = next.next;
          n.next = null;
        }
      }
    });
  }

  get(key) {
    const index = this.hashFunction(key);
    let node = this.bukets[index];
    while (node) {
      if (node.key === key) {
        return node.value;
      }
      node = node.next;
    }
    return undefined;
  }

  put(key, value) {
    if (this.count > this.size * 0.7) {
      this.resize('upSize');
    }
    const index = this.hashFunction(key);
    let node = this.bukets[index];
    if (node) {
      if (node.key === key) {
        node.value = value;
      } else {
        const item = new Node(key, value);
        node.next = item;
        this.count++;
      }
    } else {
      this.bukets[index] = new Node(key, value);
      this.count++;
    }
  }

  delete(key){
    if(this.count < this.size *0.25){
      this.resize('downSize');
    }
    const index = this.hashFunction(key);
    let prev = null;
    let old = this.bukets[index];
    let node = old;
    while(node){
      if(node.key === key){
        if(prev){
          prev.next = node.next;
        }else{
          old = node.next;
        }
        break;
      }
      prev = node;
      node = node.next;
    }
    this.bukets[index] = old;
    this.count--;
    return undefined;
  }
}

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

const hashTable = new HashTable();
hashTable.put("sdef", "a");
hashTable.put("sdf", "b");
hashTable.put("sdsf", "c");
hashTable.put("ssd", "d");
console.log(hashTable.get("sdsf"));
console.log(hashTable.get("ssdsf"));
hashTable.delete("sdf")
console.log(hashTable);
