function encode(strs) {
  return strs.reduce((acv, curv) => {
    const n = curv.length;
    const newStr = `${n}#${curv}`;
    return acv + newStr;
  }, "");
}

function decode(str) {
  const res = [];
  let i = 0;
  while (i < str.length) {
    let j = parseInt(i) + 1;
    console.log("i", i, "j", j, "str[j] = ", str[j]);
    while (str[j] !== "#" && j < str.leng) {
      j++;
    }

    const len = parseInt(str.substring(i, j));

    const word = str.substring(j + 1, j + 1 + len);

    res.push(word);
    i = j + len + 1;
  }
  return res;
}
