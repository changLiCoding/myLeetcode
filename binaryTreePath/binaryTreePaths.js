const helper = function(node, currPath, res) {
  currPath += '->' + node.val;
  if (node.left === null && node.right === null) {
    res.push(currPath);
    return;
  }
  if (node.left) helper(node.left, currPath, res);
  if (node.right) helper(node.right, currPath, res);

};


const binaryTreePaths = (root) => {
  const res = [];
  if (!root) return res;
  let currPath = root.val.toString();
  if (root.left === null && root.right === null) res.push(currPath);

  if (root.left) helper(root.left, currPath, res);
  if (root.right) helper(root.right, currPath, res);



  return res;
};
