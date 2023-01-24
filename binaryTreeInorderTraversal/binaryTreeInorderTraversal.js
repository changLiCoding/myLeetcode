const inorderTraversal = (root) => {
  const res = [];
  if (root === null) {
    return res;
  }

  const recursionHelper = (node) => {
    if (node.left !== null) {
      recursionHelper(node.left);
    }
    res.push(node.val);
    if (node.right !== null) {
      recursionHelper(node.right);
    }
  };

  recursionHelper(root);

  return res;
};
