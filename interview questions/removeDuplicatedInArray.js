/* eslint-disable */

const sample = [2, 4, 5, 2, 5, 2, 7, 78, 231, 231, 45, 2, 5, 43];

const removeDupInArray = (arr) => {
	const res = [];

	for (let val of arr) {
		if (!res.includes(val)) {
			res.push(val);
		}
		continue;
	}

	return res;
};

console.log(removeDupInArray(sample));

// const removeDupByReduce = (arr) => {
// 	return arr.reduce((preArr, currV) => {
// 		return preArr.includes(currV) ? preArr : [...preArr, currV];
// 	}, []);
// };

const removeDupByReduce = (arr) => {
	return arr.reduce(
		(acc, currV) => (acc.includes(currV) ? acc : [...acc, currV]),
		[]
	);
};

const sample2 = [2, 4, 5, 2, 5, 2, 7, 78, 231, 231, 45, 2, 5, 43];

console.log(removeDupByReduce(sample2));

// const removeDuplicatedInArray = (arr) => Array.from(new Set(arr));

// const remove2 = (arr) => {
// 	const res = [];

// 	arr.forEach((element) => {
// 		res.indexOf(element) === -1 && res.push(element);
// 	});
// 	return res;
// };

// const remove3 = (arr) => {
// 	const res = [];

// 	arr.forEach((element) => {
// 		!res.includes(element) && res.push(element);
// 	});
// 	return res;
// };

// const remove4 = (arr) => {
// 	return arr.reduce((acc, curr) => {
// 		!acc.includes(curr) && acc.push(curr);
// 		return acc;
// 	}, []);
// };

// console.log(removeDuplicatedInArray(sample));
// console.log(remove2(sample));
// console.log(remove3(sample));
// console.log(remove4(sample));
