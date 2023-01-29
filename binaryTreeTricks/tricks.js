const depthFirst = (root) => {
  const res = [];
  if (root === null) return res;
  const helper = (node) => {
    res.push(node.val);
    if (res.left !== null) {
      helper(res.left);
    }
    if (res.right !== null) {
      helper(res.right);
    }
    return res;
  };
  helper(root);
};

const breadthFirst = (root) => {
  const res = [];
  if (root === null) return res;

  let stack = [];
  stack.push(root);
  while (stack.length > 0) {
    let temp = stack.shift();
    res.push(temp.val);
    if (temp.left !== null) {
      stack.push(temp.left);
    }
    if (temp.right !== null) {
      stack.push(temp.right);
    }
  }
  return res;
};
