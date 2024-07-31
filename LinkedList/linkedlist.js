class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node(4);
    this.tail = this.head;
  }

  push(value) {
    const 
    (this.head = { ...this.head, next: new Node(value) }),
      (this.tail = new Node(value));
  }
}

const list = new LinkedList(5);
list.push(5)
console.log('info',list);
