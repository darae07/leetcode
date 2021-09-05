// stack: 스택은 한 쪽 끝에서만 자료를 넣거나 뺄 수 있는 선형 구조(LIFO - Last In First Out)
// stack.top(): 스택의 가장 윗 데이터를 반환한다. 만약 스택이 비었다면 이 연산은 정의불가 상태이다.
// stack.pop(): 스택의 가장 윗 데이터를 삭제한다. 스택이 비었다면 연산 정의불가 상태.
// stack.push(): 스택의 가장 윗 데이터로 top이 가리키는 자리 위에(top = top + 1) 메모리를 생성, 데이터 x를 넣는다.
// stack.empty(): 스택이 비었다면 1을 반환하고,그렇지 않다면 0을 반환한다.

class Stack {
  t = null;
  count = 0;

  empty(){
    return this.t === null;
  }
  push(value){
    const node = new Node(value);
    node.next = this.t;
    this.t = node;
    this.count ++;
  }
  top(){
    if (this.empty()){
      return false;
    }
    return this.t.value;
  }
  pop(){
    if (this.empty()){
      return false;
    }
    const value = this.t.value;
    this.t = this.t.next;
    this.count --;
    return value
  }
};

class Node {
  constructor(data){
    this.value = data;
    this.next = null;
  }
}

const stack = new Stack();
stack.push(3);
console.log(stack.top())
console.log(stack.pop())
console.log(stack.empty())
