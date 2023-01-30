const sum = (arr) => {
  if (arr.length === 1) return arr.at(-1);

  return arr[0] + sum(arr.slice(1));
};

console.log(sum([1,2,3,4,5,6]));

const calculateExponent = (base, exponent) => {
  let count = exponent;

  if (count === 1) return base;
  count--;
  return base * calculateExponent(base, exponent - 1);
};

console.log(calculateExponent(2, 4));


const isPalindrome = (str) => {
  let newStr = str.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase();
  let arr = newStr.split(' ');
  let processingArr = arr.join('').split('');

  const checkPalindrom = (arr) => {
    if (arr.length === 1 || arr.length === 0) return true;
    console.log(arr);
    const startChar = arr.shift();

    const endChar = arr.pop();
    if (startChar !== endChar) return false;

    return checkPalindrom(arr);
  };
  console.log(processingArr);

  return checkPalindrom(processingArr);

};




console.log(isPalindrome('11/11/11/11 11:11'));
