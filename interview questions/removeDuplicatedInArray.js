/* eslint-disable */

const sample = [2, 4, 5, 2, 5, 2, 7, 78, 231, 231, 45, 2, 5, 43];

const removeDuplicatedInArray = (arr) => Array.from(new Set(arr));

const remove2 = (arr) => {
	const res = [];

	arr.forEach((element) => {
		res.indexOf(element) === -1 && res.push(element);
	});
	return res;
};

const remove3 = (arr) => {
	const res = [];

	arr.forEach((element) => {
		!res.includes(element) && res.push(element);
	});
	return res;
};

const remove4 = (arr) => {
	return arr.reduce((acc, curr) => {
		!acc.includes(curr) && acc.push(curr);
		return acc;
	}, []);
};

console.log(removeDuplicatedInArray(sample));
console.log(remove2(sample));
console.log(remove3(sample));
console.log(remove4(sample));
