function validParentheses (s) {
  // while (s.includes('{}') || s.includes('()') || s.includes('[]')) {
  //   s = s.replace('{}', '');
  //   s = s.replace('()', '');
  //   s = s.replace('[]', '');
  // }

  // return s === '';


  const closeMap = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  const stack = [];

  for (let c of s) {


    if (closeMap[c]) {

      if (stack.length && stack[stack.length - 1] === closeMap[c]) {
        stack.pop();
      } else {
        return false;
      }

    } else {
      stack.push(c)
    }

  }
  return stack.length === 0
}