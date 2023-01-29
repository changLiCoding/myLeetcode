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
  if (!q && !p) return true;
  if (!p || !q || p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

let isSameTree2 = function(p, q) {
  const stk = [p, q];
  while (stk.length) {
    const pNode = stk.shift(), qNode = stk.shift();
    if (!pNode && !qNode) continue;
    if (!pNode || !qNode || pNode.val !== qNode.val) return false;
    stk.push(pNode.left, qNode.left, pNode.right, qNode.right);
  }
  return true;
};

