/* eslint-disable */

const countVowels = (str) => {
	const vowels = ["a", "e", "i", "o", "u"];

	return str
		.toLowerCase()
		.split("")
		.reduce((acc, curr) => (vowels.includes(curr) ? acc + 1 : acc), 0);
};

console.log(countVowels("arrrrray iii r"));
