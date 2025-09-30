function revertTree(root) {
  if (root === null) return null;
  const queue = new Queue([root]);

  while (!queue.isEmpty()) {
    let node = queue.pop();
    [node.left, node.right] = [node.right, node.left];
    if (node.left != null) queue.push(node.left);
    if (node.right != null) queue.push(node.right);
  }

  return root;
}
