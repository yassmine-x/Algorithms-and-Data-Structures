const {
  findTargetValueR,
  findTargetValueI,
  reverseListI,
  reverseListR,
  zipper,
  Node,
} = require("./Linked Lists");

describe("finding target value iteratively and recursively", () => {
  test("when there is one node recursive", () => {
    const a = new Node(1);
    expect(findTargetValueR(a, 0)).toBe(1);
  });

  test("when there is one node iterative", () => {
    const a = new Node(1);
    expect(findTargetValueI(a, 0)).toBe(1);
  });

  test("when there is more than one node recursive", () => {
    const a = new Node(1);
    const b = new Node(2);
    const c = new Node(3);
    const d = new Node(4);

    a.next = b;
    b.next = c;
    c.next = d;

    expect(findTargetValueR(a, 3)).toBe(4);
  });
  test("when there is more than one node iterative", () => {
    const a = new Node(1);
    const b = new Node(2);
    const c = new Node(3);
    const d = new Node(4);

    a.next = b;
    b.next = c;
    c.next = d;

    expect(findTargetValueI(a, 3)).toBe(4);
  });
});

describe("reversing a linked list iteratively and recursively", () => {
  const a = new Node(1);

  test("when there is one node iterative", () => {
    expect(reverseListI(a)).toBe(a);
  });
  test("when there is one node recursive", () => {
    expect(reverseListR(a)).toBe(a);
  });
  test("when there is more than one node iterative", () => {
    const b = new Node(2);
    const c = new Node(3);
    const d = new Node(4);

    a.next = b;
    b.next = c;
    c.next = d;
    expect(reverseListI(a)).toBe(1);
  });
  test("when there is more than one node recursive", () => {
    const a = new Node(1);
    const b = new Node(2);
    const c = new Node(3);
    const d = new Node(4);

    a.next = b;
    b.next = c;
    c.next = d;
    expect(reverseListR(a)).toBe(a);
  });
});
