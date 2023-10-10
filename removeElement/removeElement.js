// const removeElement = (nums, val) => {
// 	const arr = nums.filter((num) => num !== val);

// 	nums.length = 0;
// 	nums.push(...arr);

// 	return arr.length;
// };

const removeElement = (nums, val) => {
	const index = nums.indexOf(val);

	if (index === -1) {
		return nums;
	}

	const newNums = nums.filter((num) => num != val);

	return newNums.length;
};

console.log(removeElement([3, 2, 2, 3], 3));
