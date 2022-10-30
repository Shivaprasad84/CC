const print = console.log;

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
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

function isPalindrome(head) {
  let fast = head;
  let slow = head;
  while(fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  slow = reverse(slow);
  fast = head;

  while(slow !== null) {
    if(slow.data !== fast.data) {
      return false;
    }
    slow = slow.next;
    fast = fast.next;
  }
  return true;
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(2);
const e = new Node(1);
a.next = b;
b.next = c;
c.next = d;
d.next = e;

print(isPalindrome(a)); // true
