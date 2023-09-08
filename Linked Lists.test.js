const {
  findTargetValueR,
  findTargetValueI,
  reverseListI,
  reverseListR,
  zipper,
} = require("./Linked Lists");

describe("hello", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(findTargetValueI(1, 2)).toBe(3);
  });
});
