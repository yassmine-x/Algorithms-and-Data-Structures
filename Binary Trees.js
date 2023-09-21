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

//does tree include target value?

function treeIncludes(root, target) {
  if (root.val === null) {
    return [];
  }
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.pop();
    if (current.val === target) {
      return true;
    }
    if (current.left) {
      queue.unshift(current.left);
    }
    if (current.right) {
      queue.unshift(current.right);
    }
  }
  return false;
}
// console.log(treeIncludes(a, "d"));
// console.log(treeIncludes(a, "p"));

//does tree include target value? recursive
function treeIncludesR(root, target, next) {
  next = root.right;
  if (root.left === null && root.right === null) {
    return treeIncludesR(next);
  }
}

//treeSumRecursive

function treeSum(root) {
  if (root.val === null) return 0;
  return root.val + treeSum(root.left) + treeSum(root.right);
}

//find tree minimum value recursive
function treeMin(root) {
  if (root === null) {
    return Infinity;
  }
  const left = treeMin(root.left);
  const right = treeMin(root.right);

  return Math.min(root.val, left, right);
}

const g = new Node(5);
const h = new Node(4);
const i = new Node(6);
const j = new Node(1);
const k = new Node(9);
const l = new Node(10);

g.left = h;
g.right = i;
h.left = j;
h.right = k;
i.left = l;

console.log(treeMin(g));

//find tree minimum value iterative

function treeMinI(root) {
  const stack = [root];
  let smallest = Infinity;
  while (stack.length > 0) {
    let current = stack.pop();
    if (current.val < smallest) {
      smallest = current.val;
    }
    if (current.left !== null) {
      stack.push(current.left);
    }
    if (current.right !== null) {
      stack.push(current.right);
    }
  }
  return smallest;
}

function treeMaxPath(root) {
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.val;
  const maxPath = Math.max(treeMaxPath(root.left), treeMaxPath(root.right));
  return root.val + maxPath;
}
