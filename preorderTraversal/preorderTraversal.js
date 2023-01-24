//const preOrderTraversal = (root) => {
//  const res = [];
//  if (root === null) {
//    return res;
//  }
//  const recursion = (node) => {
//    res.push(node.val);
//    if (node.left !== null) {
//      recursion(node.left);
//    }
//    if (node.right !== null) {
//      recursion(node.right);
//    }
//  };
//  recursion(root);
//  return res;
//};




const preorderTraversal = function(root) {
  const res = [];
  if (root === null) {
    return res;
  }
  const stack = [];
  stack.push(root);
  while (stack.length > 0) {
    const current = stack.pop();
    res.push(current.val);
    if (current.right !== null) {
      stack.push(current.right);
    }
    if (current.left !== null) {
      stack.push(current.left);
    }
  }
  return res;

};


console.log(preOrderTraversal([1,null,2,3]));
