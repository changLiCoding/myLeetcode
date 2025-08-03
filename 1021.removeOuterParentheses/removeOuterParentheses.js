function removeParentheses (s) {
  let balance = 0;
  let res = '';
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === ")" ? balance-- : balance++;

    if (balance === 0) {
      const subString = s.substring(start + 1, i);
      res += subString;
      start = i + 1;
    }
  }

  return res;
}