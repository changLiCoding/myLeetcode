const invertTree = (root) => {
  if (root === null || (!root.right && !root.left)) return root;

  invertTree(root.left);

  invertTree(root.right);

  let temp = root.right;
  root.right = root.left;
  root.left = temp;

  return root;
};

const invertTree1 = (root) => {
  if (root === null) return root;

  const stack = [root];
  while (stack.length) {
    const current = stack.shift();
    if (current) {
      let temp = current.left;
      current.left = current.right;
      current.right = temp;
      stack.push(current.right, current.left);
    }
  }
  return root;
};
