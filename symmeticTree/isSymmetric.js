const isSymmetric = (root) => {
  if (root === null) return true;

  const arr = [root.left, root.right];

  while (arr.length) {
    const node1 = arr.shift();
    const node2 = arr.shift();
    if (!node1 && !node2) continue;
    if (!node1 || !node2 || node2.val !== node2.val) return false;
    arr.push(node1.left, node2.right, node1.right, node2.left);

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

const isSymmetric3 = function(root) {
  const stack = [[root.left, root.right]];
  while (stack.length) {
    let [leftNode, rightNode] = stack.pop();
    if (!leftNode && !rightNode) continue;
    if (!leftNode || !rightNode || leftNode.val !== rightNode.val) return false;
    if (leftNode.val === rightNode.val) {
      stack.push([leftNode.right, rightNode.left]);
      stack.push([leftNode.left, rightNode.right]);

    } else {
      return false;
    }
  }
  return true;
};
