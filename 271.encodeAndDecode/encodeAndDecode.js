function encode(strs) {
  //   return strs.reduce((acv, curv) => {
  //     const n = curv.length;
  //     const newStr = `${n}#${curv}`
  //     return acv + newStr
  //   }, '')

  return strs.reduce((acc, cur) => {
    return acc + cur.length.toString() + "#" + cur;
  }, "");
}
/**
 * @param {string} str
 * @returns {string[]}
 */
function decode(str) {
  // const res = [];
  // console.log('str: ', str)
  // let i = 0
  // while (i < str.length) {

  //     let j = parseInt(i) + 1
  //     console.log('i', i, 'j', j, 'str[j] = ', str[j]);
  //     while (str[j] !== "#" && j < str.leng) {
  //         j++
  //     }

  //     const len = parseInt(str.substring(i, j))

  //     const word = str.substring(j + 1, j + 1 + len)

  //     res.push(word)
  //     i = j + len + 1
  // }
  // return res

  const res = [];

  let l = 0,
    r = 0;

  while (r < str.length) {
    if (str[r] === "#") {
      const length = parseInt(str.substring(l, r));

      const text = str.substring(r + 1, r + length + 1);
      console.log(length, text, l, r);
      res.push(text);
      r += length + 1;
      l = r;
      console.log(l, r);
    } else {
      r++;
    }
  }
  return res;
}
