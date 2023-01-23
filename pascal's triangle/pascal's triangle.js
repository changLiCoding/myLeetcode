const triangleMaxtrix = (rowNum) => {
  let returnArr = [[1], [1,1]];

  for (let i = 2; i < rowNum; i++) {
    returnArr[i] = [];
    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        returnArr[i].push(1);
      } else {
        returnArr[i][j] = returnArr[i - 1][j] + returnArr[i - 1][j - 1];
      }
    }
  }

  return returnArr;
};
console.log(triangleMaxtrix(6));
