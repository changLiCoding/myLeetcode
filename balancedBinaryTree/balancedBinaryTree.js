const isBalanced = (root) => {

  const recursionHeight = (node) => {
    if (node === null) {
      return 0;
    }
    let leftHeight = recursionHeight(node.left);
    if (leftHeight === -1) return -1;
    let rightHeight = recursionHeight(node.right);
    if (rightHeight === -1) return -1;

    let res;
    if (rightHeight - leftHeight > 1 || leftHeight - rightHeight > 1) {
      res = -1;
    } else {
      res = 1 + (rightHeight > leftHeight ? rightHeight : leftHeight);
    }
    return res;
  };
  return recursionHeight(root) !== -1;
};
