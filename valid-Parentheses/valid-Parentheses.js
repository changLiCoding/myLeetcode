const isValid = (str) => {
  // if(str.length % 2 !== 0) return false
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    console.log(str[i], stack);
    if (str[i] === '(') {
      stack.push(')');
    } else if (str[i] === '[') {
      stack.push(']');
    } else if (str[i] === '{') {
      stack.push('}');
    } else if (stack.pop() !== str[i]) {
      return false;
    }
  }
  if (stack.length !== 0) return false;
  return true;
};
