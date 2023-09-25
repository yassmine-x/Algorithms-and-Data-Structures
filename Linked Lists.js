class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);

a.next = b;
b.next = c;
c.next = d;

let count = 0;

//finding a value at an index
//recursive approach
const findTargetValueR = (head, index) => {
  if (count === index) {
    return head.value;
  }
  count++;
  return findTargetValueR(head.next, index);
};
//iterative approach
const findTargetValueI = (head, index) => {
  let count2 = 0;
  let current = head;
  while (current !== null) {
    if (count2 == index) {
      return current.value;
    }
    current = current.next;
    count2++;
  }
};

//reversing a linked list
//iterative approach
const reverseListI = (head) => {
  if (head.next === null) return head;
  let prev = null;
  let current = head;
  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
};

//pointer to previous, beginning at null
//pointer to current, beginning at head
//pointer to next, beginning at current.next
//stop when next is equal to null

//n        <-    a         b ->       c
//prev        current     next
//.  prev        current   next

//recursive approach

const reverseListR = (head, prev = null) => {
  if (head === null) {
    return prev;
  }
  const next = head.next;
  const current = head;
  head.next = prev;
  return reverseListR(next, current);
};
//function should return new head of linked list

//zipper function

const s = new Node(6);
const t = new Node(7);

s.next = t;

//iterative solution

const zipper = (head1, head2) => {
  const tail = head1;
  let current1 = head1;
  let current2 = head2;

  count = 1;
  while (current2 !== null) {
    if (count % 2 === 0) {
      //even
      tail.next = current2;
      current2 = current2.next;
      // curr1NextOriginal = current1.next
      // current1.next=current2
      // current2.next= curr1NextOriginal
    } else {
      tail.next = current1;
      current1.next;
    }
    tail = tail.next;
    count++;
    return tail;
  }

  if (current1 !== null) {
    tail.next = current1;
  }
  if (current2 !== null) {
    tail.next = current2;
  }
};
//head1 a ->      b -> c -> d -> null
//     curr1   curr1.next
//head2 s ->       t -> null
//     curr2    curr2.next

//we want curr1.next to equal curr2
// we then want curr1 to equal curr1.next original

module.exports = {
  findTargetValueR,
  findTargetValueI,
  reverseListI,
  reverseListR,
  zipper,
  Node,
};
