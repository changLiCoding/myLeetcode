let removeElement = function (nums, val) {
	// create array with content of nums but without val items
	let arr = nums.filter((num) => num !== val);
	// set nums length to zero
	nums.length = 0;
	// push content of arr to num
	nums.push(...arr);
	//return length of nums
	return nums.length;
};
