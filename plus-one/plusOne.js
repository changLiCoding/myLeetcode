let plusOne = function(digits) {
  const reverseArr = digits.reverse();
  reverseArr.forEach((ele,i) => {
    if (i === 0) {
      reverseArr[0] += 1;
    }
    if (reverseArr[i] >= 10) {
      reverseArr[i] = 0;
      reverseArr[i + 1] += 1;
      console.log(reverseArr[i + 1]);
      console.log(i + 1, reverseArr.length);
      if (isNaN(reverseArr[i + 1])) {
        reverseArr[i + 1] = 1;
      }
    }
  });
  return reverseArr.reverse();


};

console.log(plusOne([9]));
