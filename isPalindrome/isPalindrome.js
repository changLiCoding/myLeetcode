// const isPalindrome = function(s) {
//   let noSpecialChars = s.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase().split(' ');
//   noSpecialChars = noSpecialChars.join('');
//   const len = noSpecialChars.length;
//   if (len <= 1) return true;
//   if (noSpecialChars[0] !== noSpecialChars[len - 1]) return false;
//   const headlessStr = noSpecialChars.slice(1,-1);
//   return isPalindrome(headlessStr);
// };

// const isPalindrome2 = function(s) {
//   const noSpecialChars = s.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase().split(' ').join('');
//   return noSpecialChars.split('').reverse().join('') === noSpecialChars ? true : false;
// };

const isPalindrome = (str) => {
	const stringNoSpace = str.split("").join("");

	console.log(stringNoSpace);
	console.log(stringNoSpace.split("").reverse().join(""));
	console.log();
	return stringNoSpace.split("").reverse().join("") === stringNoSpace;
};

console.log(isPalindrome("1221"));
