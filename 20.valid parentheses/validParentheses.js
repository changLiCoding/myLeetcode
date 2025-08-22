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

const valid = (s) => {
    const closeMap = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  const stack = [];

  for (let str of s) {
    if (closeMap[str]) {
      if (stack.length > 0 && stack[stack.length - 1] === closeMap[str]) {
        stack.pop();
      } else {
        return false;
      }

    } else {
      stack.push(str);
    }
  }
  return stack.length === 0;
}

function isValidParentheses (str) {
  const stack = [];

  const parentheseHolder = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let s of str) {
    if (parentheseHolder[s]) {
      if (stack.length > 0 && stack.at(-1) === parentheseHolder[s]) {
        stack.pop();
      } else {
        return false
      }
    } else {
      stack.push(s);
    }
  }


  return stack.length === 0;
}