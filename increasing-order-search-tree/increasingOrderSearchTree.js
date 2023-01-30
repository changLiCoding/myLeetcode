const increasingBST = (root) => {
  const arr = [];
  if (!root) return arr;

  const recursion = (node) => {
    arr.push(node.val);
    if (node.left) recursion(node.left);
    if (node.right) recursion(node.right);
    return arr;
  };

  const sortedArr = recursion(root).sort((a, b) => a - b);

  let node = new TreeNode(sortedArr.shift());
  let current = node;

  while (sortedArr.length) {
    current.right = new TreeNode(sortedArr.shift());
    current = current.right;
  }

  return node;


};
