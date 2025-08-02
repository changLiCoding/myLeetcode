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

  // const stack = [];

  // for (let c of s) {


  //   if (closeMap[c]) {

  //     if (stack.length && stack[stack.length - 1] === closeMap[c]) {
  //       stack.pop();
  //     } else {
  //       return false;
  //     }

  //   } else {
  //     stack.push(c)
  //   }

  // }
  // return stack.length === 0


  // const stack = [];

  // for (let c of s) {
  //   if (closeMap[c]) {
  //     if (stack && stack.length > 0 && stack[stack.length - 1] === closeMap[c]) {
  //       stack.pop();
  //     } else {
  //       return false;
  //     }

  //   } else {
  //     stack.push(c)
  //   }
  // }

  // return stack.length === 0;

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (closeMap[s[i]]) {
      if (stack.length > 0 && stack[stack.length - 1] === closeMap[s[i]]) {
        stack.pop();
      } else {
        return false;
      }


    } else {
      stack.push(s[i]);
    }
  }

  return stack.length === 0;
}