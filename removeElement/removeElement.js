const removeElement = (nums, val) => {
	const arr = nums.filter((num) => num !== val);

	nums.length = 0;
	nums.push(...arr);

	return arr.length;
};

console.log(removeElement([3, 2, 2, 3], 3));
