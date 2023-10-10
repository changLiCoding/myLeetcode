/* eslint-disable */

// const countVowels = (str) => {
// 	const vowels = ["a", "e", "i", "o", "u"];

// 	return str
// 		.toLowerCase()
// 		.split("")
// 		.reduce((acc, curr) => (vowels.includes(curr) ? acc + 1 : acc), 0);
// };

const countVowels = (arr) => {
	const vowels = ["a", "e", "i", "o", "u"];
	const newArr = arr.toLowerCase().split("");
	console.log(newArr);

	return newArr.reduce(
		(acc, currt) => (vowels.includes(currt) ? acc + 1 : acc),
		0
	);
	// let count = 0;
	// for (let char of newArr) {
	// 	if (vowels.indexOf(char) !== -1) {
	// 		count++;
	// 	}
	// }
	// return count;
};

console.log(countVowels("arrrrray iii r"));
