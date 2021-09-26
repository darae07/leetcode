// 힙: 완전 이진 트리의 일종이며 주로 우선순위 큐를 구현하는데 사용된다.
// 완전 이진 트리는 배열을 사용해 효율적으로 구현이 가능하다.
// 부모노드 > 자식노드 의 느슨한 정렬을 가진다.
// 따라서 가장 큰 값은 루트 노드이다.
// 삽입 삭제시 log N의 시간복잡도를 가진다.

class MaxHeap {
  heap = [null];
  size = 0;

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  haepSize() {
    return this.size;
  }

  getMax() {
    return this.haep[1] ? this.haep[1] : null;
  }

  heapPush(value) {
    this.heap.push(value);
    this.size++;
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (
      currentIndex > 1 &&
      this.heap[currentIndex] > this.heap[parentIndex]
    ) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  heapPop() {
    if (this.heap.length === 1) {
      return;
    }
    const value = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.size--;
    let currentIndex = 1;
    while (currentIndex < this.heap.length) {
      if (this.heap[currentIndex] < this.heap[currentIndex * 2]) {
        this.swap(currentIndex, currentIndex * 2);
        currentIndex = currentIndex * 2;
      } else if (this.heap[currentIndex] < this.heap[currentIndex * 2 + 1]) {
        this.swap(currentIndex, currentIndex * 2 + 1);
        currentIndex = currentIndex * 2 + 1;
      } else {
        break;
      }
    }
    return value;
  }
}

const heap = new MaxHeap();
heap.heapPush(1);
heap.heapPush(2);
heap.heapPush(3);
heap.heapPop();
console.log(heap);
