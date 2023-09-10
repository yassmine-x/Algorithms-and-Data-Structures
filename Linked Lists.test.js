const {
  findTargetValueR,
  findTargetValueI,
  reverseListI,
  reverseListR,
  zipper,
} = require("./Linked Lists");

describe("finding target value iteratively and recursively", () => {
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  test("when there is one node", () => {
    const a = new Node(1);
    expect(findTargetValueR(a, 0)).toBe(1);
  });
});
