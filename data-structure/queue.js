// queue: 먼저 집어 넣은 데이터가 먼저 나오는 FIFO(First In First Out)구조로 저장하는 형식을 말한다.
// put: 큐에 자료를 넣는 것
// get: 큐에서 자료를 꺼내는 것
// front: 데이터를 get 할 수 있는 위치
// rear: 데이터를 put 할 수 있는 위치
// overflow: 큐가 꽉차서 더 이상 자료를 넣을 수 없는 경우
// underflow: 큐가 비어 있어 자료를 꺼낼 수 없는 경우
// 여기서는 연결리스트를 이용하여 overflow가 발생하지 않도록(삽입과 삭제가 제한되지 않도록) 구현할 것이다.

class Queue{
  front = null;
  rear = null;
  count = 0;

  put(value) {
    // 자바스크립트의 객체는 메모리 주소를 변수명에 할당한다.
    // 따라서 객체의 값이 변경되면 이를 참조하는 모든 변수는 같은 값을 공유한다.
    const node = new Node(value);
    if(!this.front) {
      this.front = node;
    }else{
      this.rear.next = node;
    }
    this.rear = node;
    this.count ++;
  };

  get() {
    if(this.front === null){
      return false;
    }
    this.count --;
    const value = this.front.value;
    this.front = this.front.next;
    return value
  }
}

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

const queue = new Queue();
queue.put(1);
queue.put(2);
queue.put(3);
console.log(queue.get());
console.log(queue.get());
console.log(queue.get());