const traversalTree = (node) => {
  const res = [];
  if (node === null) return res;
  let stack = [];
  stack.push(node);
  while (stack.length > 0) {
    const current = stack.shift();
    res.push(current.val);
    if (current.left !== null) {
      stack.push(current.left);
    }
    if (current.right !== null) {
      stack.push(current.right);
    }
  }
  return res;
};

const isSameTree = function(p, q) {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;
  return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right));
};

let isSameTree2 = function(p, q) {
  const stk = [p, q];
  while (stk.length) {
    const n1 = stk.pop(), n2 = stk.pop();
    if (!n1 && !n2) continue;
    if (!n1 || !n2 || n1.val !== n2.val) return false;
    stk.push(n1.left, n2.left, n1.right, n2.right);
  }
  return true;
};

