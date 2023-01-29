const isSymmetric = (root) => {
  if (root === null) return true;

  const stack = [root.left, root.right];

  while (stack.length) {
    const node1 = stack.shift();
    const node2 = stack.shift();
    if (!node1 && !node2) continue;
    if (!node1 || !node2 || node2.val !== node2.val) return false;
    stack.push(node1.left, node2.right, node1.right, node2.left);

  }

  return true;
};

const isSymmetric2 = (root) => {
  if (root === null) return true;
  const right = root.right;
  const left = root.left;

  const checkFnc = (node1, node2) => {
    if (!node1 && !node2) return true;
    if (!node1 || !node2 || node1.val !== node2.val) return false;

    return checkFnc(node1.left, node2.right) && checkFnc(node1.right, node2.left);
  };

  return checkFnc(left, right);

};

const isSymmetric3 = (root) => {
  if (root === null) return true;
  const stack = [];
  stack.push([root.left, root.right]);
  while (stack.length) {
    let [node1, node2] = stack.pop();
    if (node1 === null && node2 === null) continue;
    if (node1 === null || node2 === null) return false;
    if (node1.val === node2.val) {
      stack.push(node1.right, node2.left);
      stack.push(node1.left, node2.right);

    } else {
      return false;
    }

  }
  return true;
};
