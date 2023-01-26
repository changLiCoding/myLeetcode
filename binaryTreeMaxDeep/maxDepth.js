let maxDepth = function(root) {
  if (!root) return 0;
  let num = 0;
  const stack = [root];
  while (stack.length) {
    let len = stack.length;
    num++;
    while (len--) {
      const o = stack.shift();
      o.left && stack.push(o.left);
      o.right && stack.push(o.right);
    }
  }
  return num;
};
