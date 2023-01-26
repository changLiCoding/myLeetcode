const postOrderTraversal = (root) => {
  const res = [];
  if (root === null) return res;

  const helper = (node) => {
    if (node.left) {
      helper(node.left);
    }
    if (node.right) {
      helper(node.right);
    }
    res.push(node.val);
  };
  helper(root);
  return res;
};
