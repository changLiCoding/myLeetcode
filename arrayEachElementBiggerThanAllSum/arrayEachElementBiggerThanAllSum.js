const array = [1, 2, 3, 4];

const arrayEachElementBiggerThanAllSum = (array) => {
	let res = true;
	let sum = 0;

	array.forEach((number, index) => {
		console.log("number", number, "sum", sum, "last number", array[index - 1]);
		typeof array[index - 1] === "number"
			? (sum = sum + array[index - 1])
			: (sum = 0);

		if (number <= sum) res = false;
	});
	return res;
};

console.log(arrayEachElementBiggerThanAllSum(array));
