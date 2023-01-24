//const inorderTraversal = (root) => {
//  const res = [];
//  if (root === null) {
//    return res;
//  }

//  const recursionHelper = (node) => {
//    if (node.left !== null) {
//      recursionHelper(node.left);
//    }
//    res.push(node.val);
//    if (node.right !== null) {
//      recursionHelper(node.right);
//    }
//  };

//  recursionHelper(root);

//  return res;
//};

const inorderTraversal = (root) => {
  const res = [];
  if (root === null) {
    return res;
  }
  const stack = [];
  let temp = root;
  while (temp !== null) {
    stack.push(temp);
    temp = temp.left;
  }
  while (stack.length > 0) {
    const node = stack.pop();
    res.push(node.val);
    if (node.right !== null) {
      let temp2 = node.right;
      while (temp2 !== null) {
        stack.push(temp2);
        temp2 = temp2.left;
      }
    }

  }
  return res;
};
