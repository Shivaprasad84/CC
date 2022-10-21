class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const printLinkedList = function(head) {
  let trace = head;
  while(trace !== null) {
    console.log(trace.val);
    trace  = trace.next;
  }
}

const makeLinkedList = function(arr) {
  let head = new ListNode(arr[0]);
  let trace = head;
  for(let i = 1; i < arr.length; i++) {
    trace.next = new ListNode(arr[i]);
    trace = trace.next;
  }
  return head;
}

var deleteDuplicates = function (head) {
  let trace = head;
  let prev = head;
  hm = {};
  while (trace !== null) {
    if (!hm[trace.val]) {
      hm[[trace.val]] = true; // {1: true}
    } else {
      // 1 -> 1 -> 1
      prev.next = trace.next;
      trace = prev;
    }
    prev = trace;
    trace = trace.next;
  }
  return head;
};

let lst = makeLinkedList([1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3]);
let dd = deleteDuplicates(lst);
printLinkedList(dd);


