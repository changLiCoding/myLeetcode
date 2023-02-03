const isPalindrome = function(head) {
  if (!head || !head.next) return true;
  const stack = [head];
  const res = [];
  while (stack.length) {
    const current = stack.shift();
    res.push(current.val);
    if (current.next) stack.push(current.next);
  }
  const resStr = res.join('');

  return res.reverse().join('') === resStr ? true : false;

};
