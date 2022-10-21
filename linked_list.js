class ListNode {
  constructor(val) {
    this.val = val;
    this.next = undefined;
  }
}

var mergeTwoLists = function (list1, list2) {
  let ctr1 = list1;
  let ctr2 = list2;
  let list3;


  if(ctr1.val < ctr2.val) {
    list3 = new ListNode(ctr1.val);
    ctr1 = ctr1.next;
  } else if(ctr2.val <= ctr1.val) {
    list3 = new ListNode(ctr2.val);
    ctr2 = ctr2.next;
  }
  let counter = list3;
  while(ctr1 !== undefined && ctr2 !== undefined) {
    if(ctr1.val < ctr2.val) {
      counter.next = new ListNode(ctr1.val);
      ctr1 = ctr1.next;
      counter = counter.next;
    } else if(ctr1.val >= ctr2.val) {
      counter.next = new ListNode(ctr2.val);
      ctr2 = ctr2.next;
      counter = counter.next;
    }
  }

  while(ctr1 !== undefined) {
    counter.next = new ListNode(ctr1.val);
    ctr1 = ctr1.next;
    counter = counter.next;
  }

  while(ctr2 !== undefined) {
    counter.next = new ListNode(ctr2.val);
    ctr2 = ctr2.next;
    counter = counter.next;
  }

  return list3;
};

// List 1
let a = new ListNode(1);
let b = new ListNode(2);
let c = new ListNode(4);

a.next = b;
b.next = c;
c.next = undefined;

// List 2
let d = new ListNode(1);
let e = new ListNode(3);
let f = new ListNode(4);

d.next = e;
e.next = f;
f.next = undefined;

list3 = mergeTwoLists([], []);

let counter = list3;

while(counter !== undefined) {
  console.log(counter.val);
  counter = counter.next;
}