// deque는 양쪽 끝에서 삽입과 삭제가 모두 가능한 자료 구조의 한 형태이다.
// 두 개의 포인터를 사용하여, 양쪽에서 삭제와 삽입을 발생 시킬 수 있다. 큐와 스택을 합친 형태로 생각할 수 있다.

// deque.append(item): item을 데크의 오른쪽 끝에 삽입한다.
// deque.appendLeft(item): item을 데크의 왼쪽 끝에 삽입한다.
// deque.pop(): 데크의 오른쪽 끝 엘리먼트를 가져오는 동시에 데크에서 삭제한다.
// deque.popLeft(): 데크의 왼쪽 끝 엘리먼트를 가져오는 동시에 데크에서 삭제한다.
// deque.extend(array): 주어진 배열(array)을 순환하면서 데크의 오른쪽에 추가한다.
// deque.extendLeft(array): 주어진 배열(array)을 순환하면서 데크의 왼쪽에 추가한다.
// deque.remove(item): item을 데크에서 찾아 삭제한다.
// deque.rotate(num): 데크를 num만큼 회전한다(양수면 오른쪽, 음수면 왼쪽).


class Deque{
  front = null;
  rear = null;
  count = 0;

  append(value){
    let node = new Node(value);
    if(this.rear){
      this.rear.next = node;
    }
    node.prev = this.rear;
    this.rear = node;
    if(!this.front){
      this.front = node;
    }
    this.count++;
  };

  appendLeft(value){
    let node = new Node(value);
    node.next = this.front;
    if(this.front){
      this.front.prev = node;
    }
    this.front = node;
    if(!this.rear){
      this.rear = node;
    }
    this.count++;
  }

  pop(){
    if(this.count === 0){
      throw new Error('deque is empty')
    }
    const value = this.rear.value;
    this.rear = this.rear.prev;
    if(this.rear){
      this.rear.next = null;
    }else{
      this.front = null;
    }
    this.count--;
    return value;
  }

  popLeft(){
    if(this.count === 0){
      throw new Error('deque is empty')
    }
    const value = this.front.value;
    this.front = this.front.next;
    if(this.front){
      this.front.prev = null;
    }else{
      this.rear = null;
    }
    this.count--;
    return value;
  }

  extend(array){
    if(!Array.isArray(array)){
      throw new Error('put parameter as type of array')
    }
    array.forEach(value => {
      this.append(value);
    })
  };

  extendLeft(array){
    if(!Array.isArray(array)){
      throw new Error('put parameter as type of array')
    }
    array.forEach(value => {
      this.appendLeft(value);
    })
  };

  remove(value){
    let node = this.front;
    while(node){
      if(node.value === value){
        let prev = node.prev;
        let next = node.next;
        if(prev){
          prev.next = next;
        }else{
          this.front = next;
        }

        if(next){
          next.prev = prev;
        }else{
          this.rear = prev;
        }
        this.count--;
      }
      node = node.next;
    }
  }

  rotate(num){
    if(typeof num !== 'number' || num === 0){
      throw new Error('rotate value must be a positive or negative number')
    }
    if(num > this.size){
      throw new Error("rotate value can't be bigger than deque size")
    }
    if(num > 0){
      for(let i =0; i<num; i++){
        this.appendLeft(this.pop());
      }
    }else{
      for(let i = 0; i>num; i--){
        this.append(this.popLeft());
      }
    }
  }
};

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

const deque = new Deque();
deque.appendLeft(1)
deque.appendLeft(2)
deque.popLeft()
deque.popLeft()
deque.extend([1,2,3])
deque.rotate(-1)
console.log(deque)