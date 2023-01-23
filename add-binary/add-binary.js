const addBinary = function(a, b) {
  const aStr = a.split('').reverse().map(ele => parseInt(ele));
  const bStr = b.split('').reverse().map(ele => parseInt(ele));
  const res = [];
  console.log(aStr, bStr);
  const maxLength = aStr.length > bStr.length ? aStr.length : bStr.length;
  for (let i = 0; i < maxLength; i++) {
    if (isNaN(aStr[i] + bStr[i])) res.push((typeof aStr[i] === 'number') ? aStr[i] : bStr[i]);
    else res.push(aStr[i] + bStr[i]);
  }
  console.log(res);
  res.forEach((num,i) => {
    if (num === 2) {
      res[i] = 0;
      res[i + 1] += 1;
    } else if (num === 3) {
      res[i] = 1;
      res[i + 1] += 1;
    }
  });
  console.log(res);
  if (isNaN(res.at(-1))) {
    res[res.length - 1] = 1;
  }
  return res.reverse().join('').toString();
};

console.log(addBinary('101111', '10'));
