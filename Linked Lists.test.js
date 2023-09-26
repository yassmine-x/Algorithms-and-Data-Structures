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
    reverseListI(a);
    expect(a.next).toBe(null);
  });
  test("when there is more than one node recursive", () => {
    const a = new Node(1);
    const b = new Node(2);
    const c = new Node(3);
    const d = new Node(4);

    a.next = b;
    b.next = c;
    c.next = d;
    reverseListR(a);
    expect(a.next).toBe(null);
  });
});

describe("interlinking two linked lists", () => {
  test("empty nodes should return null", () => {
    expect(zipper(null, null)).toBe(null);
  });
  test("one empty list and one none empty list should return the none empty list", () => {
    const s = new Node(6);
    expect(zipper(s, null)).toBe(s);
    expect(zipper(null, s)).toBe(s);
  });
  test("two different linked lists combine to produce an alternate sequence when more than one node is present", () => {
    const s = new Node(6);
    const t = new Node(7);
    const u = new Node(3);
    const v = new Node(4);

    s.next = t;
    u.next = v;
    zipper(s, u);
    expect(s.next).toBe(u);
  });
  test("when one linked list is shorter than another", () => {
    const s = new Node(6);
    const t = new Node(7);
    const u = new Node(3);
    const v = new Node(4);
    const w = new Node(5);
    //s, u , t, v, w
    s.next = t;
    u.next = v;
    v.next = w;
    zipper(s, u);
    expect(u.next).toBe(t);
    expect(t.next).toBe(v);
  });
});
