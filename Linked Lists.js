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

//reversing a linked list pseudo code

//pointer to previous, beginning at null
//pointer to current, beginning at head
//pointer to next, beginning at current.next
//stop when next is equal to null

//n        <-    a         b ->       c
//prev        current     next
//.  prev        current   next

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

//zipper function

//zipper function pseudo code
//head1 a ->      b -> c -> d -> null
//     curr1   curr1.next
//head2 s ->       t -> null
//     curr2    curr2.next

//we want curr1.next to equal curr2
// we then want curr1 to equal curr1.next original

//iterative solution

const zipper = (head1, head2) => {
  let tail = head1;
  //the main list
  let current1 = head1;
  let current2 = head2;

  if (head1 === null && head2 === null) return null;
  if (head1 === null) return head2;
  if (head2 === null) return head1;

  count = 0;
  while (current2 !== null && current1 !== null) {
    if (count % 2 === 0) {
      // at even counts
      tail.next = current2;
      current2 = current2.next;
      //progress through list 2
    } else {
      //at odd counts
      tail.next = current1;
      current1 = current1.next;
    }
    tail = tail.next;
    //progress through tail the main list
    count++;
    return tail;
  }

  if (current1 !== null) {
    tail.next = current1;
  }
  if (current2 !== null) {
    tail.next = current2;
  }

  return head1;
};

module.exports = {
  findTargetValueR,
  findTargetValueI,
  reverseListI,
  reverseListR,
  zipper,
  Node,
};
