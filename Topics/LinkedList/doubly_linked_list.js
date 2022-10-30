const print = console.log;

class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.tail = null;
    this.head = null;
    this.size = 0;
  }

  push_back(data) {
    this.size++;
    if(this.head === null) {
      this.head = new Node(data);
      this.tail = this.head;
      return this.head;
    }

    let trav = this.head;
    let prev;
    while(trav !== null) {
      prev = trav;
      trav = trav.next;
    }

    let temp = new Node(data);
    prev.next = temp;
    temp.prev = prev;
    this.tail = temp;
    return this.head;
  }

  print_forwards() {
    let trav = this.head;
    while(trav !== null) {
      print(trav.data);
      trav = trav.next;
    }
  }

  print_backwards() {
    let trav = this.tail;
    while(trav !== null) {
      print(trav.data);
      trav = trav.prev;
    }
  }

  check_bounds(index) {
    if(index < 0 || index >= this.size) {
      throw new Error('index out of range');
    }
  }

  delete_pointers(node) {
    node.next = null;
    node.prev = null;
  }

  remove_at(index) {
    this.check_bounds(index);
    if(index === 0) {
      let temp = this.head;
      this.head = this.head.next;
      this.head.prev = null;
      this.delete_pointers(temp);
      this.size--;
      return temp;
    }
    if(index === this.size - 1) {
      let temp = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.delete_pointers(temp);
      this.size--;
      return temp;
    }

    const dist_from_end = this.size - index - 1;
    const dist_from_start = index;

    if(dist_from_start <= dist_from_end) {
      print("from start...");
      let trav = this.head;
      let cntr = 0;
      let prev;
      while(cntr !== index) {
        prev = trav;
        trav = trav.next;
        cntr++;
      }
      let temp = trav;
      prev.next = trav.next;
      trav.next.prev = prev;
      this.delete_pointers(temp);
      this.size--;
      return temp;
    } else {
      print("from end...");
      let trav = this.tail;
      let cntr = this.size - 1;
      let curr;
      while(cntr !== index) {
        curr = trav;
        trav = trav.prev;
        cntr--;
      }
      let temp = trav;
      curr.prev = trav.prev;
      trav.prev.next = curr;
      this.delete_pointers(temp);
      this.size--;
      return temp;
    }
  }

  get_size() {
    return this.size;
  }

  at(index, value = null) {
    this.check_bounds(index);
    if(index === 0) {
      if(value) {
        this.head.data = value;
      }
      return this.head.data;
    }
    if(index === this.size - 1) {
      if(value) {
        this.tail.data = value;
      }
      return this.tail.data;
    }

    const dist_from_start = index;
    const dist_from_end = this.size - index - 1;
    if(dist_from_start < dist_from_end) {
      let trav = this.head;
      let cntr = 0;
      while(cntr !== index) {
        cntr++;
        trav = trav.next;
      }
      if(value) {
        trav.data = value;
      }
      return trav.data;
    } else {
      let trav = this.tail;
      let cntr = this.size - 1;
      while(cntr !== index) {
        cntr--;
        trav = trav.prev;
      }
      if(value) {
        trav.data = value;
      }
      return trav.data;
    }
  }
}


const lst = new DoublyLinkedList();

lst.push_back(1);
lst.push_back(2);
lst.push_back(3);
lst.push_back(4);
lst.push_back(5);
lst.push_back(6);

lst.print_forwards();
print('*');
lst.print_backwards();
print('*');
print(lst.at(3, 100));
print('*');
lst.print_forwards();
