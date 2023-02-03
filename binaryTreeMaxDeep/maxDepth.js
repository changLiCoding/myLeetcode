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




const maxDepth1 = (root) => {
  if (!root) return 0;
  let count = 0;

  const stack = [root];

  while (!stack.length) {
    const current = stack.shift();
    stack.push(current.left, current.right);
    count++;
    let lengthOfStack = stack.length;
    while (lengthOfStack--) {
      const current = stack.shift();
      if (current.left) stack.push(current.left);
      if (current.right) stack.push(current.right);
    }


  }

  //[root, root.left, root.right]
  return count;
};



