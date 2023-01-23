const minDepth = (root) => {
  if (!root) return 0;

  const stack = [[root,1]];
  while (stack.length) {
    const [current,depth] = stack.shift();
    if (!current.left && !current.right) {
      return depth;
    }
    if (current.left) stack.push([current.left, depth + 1]);

    if (current.right) stack.push([current.right, depth + 1]);
  }
};
