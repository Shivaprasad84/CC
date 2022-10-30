const print = console.log;

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
  }

  push_back(data) {
    let trav = this.head;
    if(trav == null) {
      this.head = new Node(data);
      return;
    }
    while(trav.next !== null) {
      trav = trav.next;
    }
    trav.next = new Node(data);
    this.size++;
    return this.head;
  }

  print_list() {
    let trav = this.head;
    while(trav !== null) {
      print(trav.data);
      trav = trav.next;
    }
  }

  check_bounds(index) {
    if(index >= this.size || index < 0) {
      throw new Error('index out of range');
    }
  }

  get_at(index) {
    this.check_bounds(index);
    let trav = this.head;
    let cntr = 0;
    while(cntr !== index) {
      trav = trav.next;
      cntr++;
    }
    return trav.data;
  }

  size() {
    return this.size;
  }

  update_at(index, value) {
    this.check_bounds(index);
    let trav = this.head;
    let cntr = 0;
    while(cntr !== index) {
      trav = trav.next;
      cntr++;
    }
    trav.data = value;
  }

  remove_at(index) {
    this.check_bounds(index);
    if(index === 0) {
      let temp = this.head;
      this.head = this.head.next;
      return temp;
    }
    let trav = this.head;
    let cntr = 0;
    let prev = this.head;
    while(cntr !== index) {
      prev = trav;
      trav = trav.next;
      cntr++;
    }
    prev.next = trav.next;
    this.size--;
    return trav;
  }

  reverse() {
    let curr = this.head;
    let prev = null;
    while(curr !== null) {
      let temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    this.head = prev;
  }

  copy() {
    const new_list = new LinkedList();
    let trav = this.head;
    while(trav !== null) {
      new_list.push_back(trav.data);
      trav = trav.next;
    }
    return new_list.get_head();
  }

  get_head() {
    return this.head;
  }
}

function print_list(head) {
  let trav = head;
  while(trav !== null) {
    print(trav.data);
    trav = trav.next;
  }
}

const lst = new LinkedList();

lst.push_back(1);
lst.push_back(2);
lst.push_back(3);
lst.push_back(4);
lst.push_back(5);
lst.reverse();

lst.print_list();

let new_head = lst.copy();
lst.update_at(1, 100);
let head = lst.get_head();

print_list(head);
print('*');
print_list(new_head);
