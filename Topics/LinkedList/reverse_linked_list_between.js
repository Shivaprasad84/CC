const print = console.log;

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function push_back(data, head = null) {
  if(head === null) {
    head = new Node(data);
    return head;
  }

  let trav = head;
  let prev;
  while(trav !== null) {
    prev = trav;
    trav = trav.next;
  }
  prev.next = new Node(data);
  return prev.next;
}

function print_list(head) {
  let trav = head;
  while(trav !== null) {
    print(trav.data);
    trav = trav.next;
  }
}

function reverse(left, right, l_node) {
  let curr = l_node;
  let prev = null;
  while(left <= right) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
    left++;
  }
  return prev;
}

function reverseInBetween(head, left, right) {
  let previous_node = head;
  let left_node, right_node;
  let next_node = head;
  let l = left;
  let r = right;
  let node = head;
  while(node !== null) {
    if(l === 2) {
      previous_node = node;
      left_node = previous_node.next;
    }

    if(r === 1) {
      right_node = node;
      next_node = node.next;
    }
    node = node.next;
    l--;
    r--;
  }
  let hh = reverse(left, right, left_node);

  previous_node.next = hh;
  let trav = head;
  let p;
  while(trav !== null) {
    p = trav;
    trav = trav.next;
  }
  p.next = next_node;
  return head;
}

let head = push_back(1);
push_back(2, head);
push_back(3, head);
push_back(4, head);
push_back(5, head);
push_back(6, head);

let new_head = reverseInBetween(head, 2, 6);
print_list(new_head);
