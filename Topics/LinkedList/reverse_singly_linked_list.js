const print = console.log;

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function print_list(head) {
  let trav = head;
  while(trav !== null) {
    print(trav.data);
    trav = trav.next;
  }
}

function reverse(head) {
  let curr = head;
  let prev = null;
  while(curr !== null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  head = prev;
  return head;
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
a.next = b;
b.next = c;
c.next = d;
d.next = e;

print_list(a);
print('***************************************');
let new_head = reverse(a);
print_list(new_head);
