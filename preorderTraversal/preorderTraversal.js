const preOrderTraversal = (root) => {
  const res = [];
  if (root === null) {
    return res;
  }
  const recursion = (node) => {
    res.push(node.val);
    if (node.left !== null) {
      recursion(node.left);
    }
    if (node.right !== null) {
      recursion(node.right);
    }
  };
  recursion(root);
  return res;
};

console.log(preOrderTraversal([1,null,2,3]));
