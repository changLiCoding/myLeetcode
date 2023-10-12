const uniqueOccurrences = (arr) => {
	const occurrences = {};
	for (let i = 0; i < arr.length; i++) {
		const newArr = arr.filter((ele) => ele !== arr[i]);
		occurrences[arr[i]] = arr.length - newArr.length;
	}
	console.log(occurrences);
	const realOccurrences = Object.values(occurrences);
	console.log("realOccurrences", realOccurrences);
	const set = new Set(realOccurrences);
	console.log("set", set);
	if (set.size !== realOccurrences.length) {
		return false;
	}

	return true;
};

const arr = [1, 2, 2, 1, 1, 3];
const arr1 = [1, 2];
const arr2 = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0];
const arr3 = [-1, 4, -5, 11, -3, 4, -1, 5, 0, 11, 3];

console.log(uniqueOccurrences(arr));
console.log(uniqueOccurrences(arr1));
console.log(uniqueOccurrences(arr2));
console.log(uniqueOccurrences(arr3));
