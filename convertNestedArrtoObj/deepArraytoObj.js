const deepArrayToObject = (arr) => {
  const res = {};

  //const returnArr = [];
  //const flaten = (arr) => {
  //  arr.forEach(element => {
  //    if (element instanceof Array) {
  //      flaten(element);
  //    } else {
  //      returnArr.push(element);
  //    }
  //  });
  //  console.log(`The Array looks like: ${returnArr}`);
  //  return returnArr;
  //};
  //console.log(flaten(arr));

  const helper = (nestedArr) => {
    for (let ele of nestedArr) {
      if (Array.isArray(ele)) {
        if (!Array.isArray(ele[0])) {
          res[ele[0]] = ele[1];
          if (Array.isArray(ele[1])) {
            res[ele[0]] = Object.fromEntries(ele[1]);
          }
          console.log(res);
        }
      }
    }
    console.log(`The obj looks like: ${res}`);
  };

  console.log(helper(arr));

};
console.log(deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', [['e', 5], ['f', 6]]]]]]));
