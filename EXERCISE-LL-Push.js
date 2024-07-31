class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /// WRITE PUSH METHOD HERE ///
  push(value) {
    const news = new Node(value);
    const newNode = { ...news, text: `gotcha+${this.length}` };
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length += 1;
    }
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    const temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }
    console.log(temp);
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }

    console.log("get", temp);

    return temp;
  }

  set(index, value) {
    let temp = this.get(index);

    if (temp) {
      temp.value = value;
      return true;
    }

    return false;
  }

  insert(index, value) {
    const newNode = new Node(value);
    let temp = this.get(index - 1);

    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(newNode);
    if (index < 0 || index > this.length) return undefined;

    newNode.next = temp.next;
    temp.next = newNode;

    console.log("insert", this);

    this.length++;
    return temp;
  }

  remove(index) {
    if (index === 0) return this.shift(value);
    if (index === this.length - 1) return this.pop(index);
    if (index < 0 || index >= this.length) return undefined;

    let before = this.get(index - 1);
    let temp = before.next;
    before.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  reverse() {
    const prevTail = this.tail;
    this.tail = { ...this.head };
    const length = this.length;

    // let tempHead = { ...this.head };
    // this.head = null;
    this.tail.next = null;
    let reverseList;

    for (let i = 0; i < length; i++) {
      const node = this.pop();
      if (!reverseList) {
        reverseList = new LinkedList(node.value);
      }else
      reverseList.push(node.value)
    }
    // console.log("reverse", this, { prevTail });
    return reverseList;
  }
}

var myLinkedList;
function test() {
  myLinkedList = new LinkedList(10);
  // myLinkedList.makeEmpty();
  myLinkedList.push(20);
  myLinkedList.push(30);
  myLinkedList.push(40);
  myLinkedList.push(50);
  // myLinkedList.pop();
  // myLinkedList.insert(2, 111);
  // myLinkedList.get(3);
  // myLinkedList.unshift(111);
  // myLinkedList.shift();
  // myLinkedList.reverse();
  console.log("\nLinked List:");
  // myLinkedList.printList();
  console.log(myLinkedList);
}

test();

/*
    EXPECTED OUTPUT:
    ----------------
    Head: 1
    Tail: 2
    Length: 2

    Linked List:
    1
    2

*/
