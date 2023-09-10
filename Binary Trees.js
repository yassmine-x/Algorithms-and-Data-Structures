//depth first search

//iterative solution

class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

//iterative solution to depth first search

const depthFirstValues = (root) => {
  const result = [];
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.val);
    if (current.right) {
      stack.push(current.right);
    }
    if (current.left) {
      stack.push(current.left);
    }
  }
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

depthFirstValues(a);

//recursive solution to depth first search

function recursiveDepthFirstValues(root) {
  if (root === null) {
    return [];
  }
  const rightValues = recursiveDepthFirstValues(root.right);
  const leftValues = recursiveDepthFirstValues(root.left);
  return [root, ...leftValues, ...rightValues];
}

//iterative solution to breadth first search
function breadthFirstI(root) {
  const queue = [root];
  let current;
  const values = [];
  while (queue.length > 0) {
    current = queue.pop();
    values.push(current.val);
    if (current.left) {
      queue.unshift(current.left);
    }
    if (current.right) {
      queue.unshift(current.right);
    }
  }
  return values;
}

console.log(breadthFirstI(a), "iterative solution");

//recursive solution to breadth first search
function breadthFirstR() {}
