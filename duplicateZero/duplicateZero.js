const duplicateZero = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			arr.splice(-1, 1);
			console.log("after first splice arr: ", arr);
			arr.splice(i + 1, 0, 0);
			i++;
			console.log("after second splice arr: ", arr);
		}
	}

	return arr;
};

const arr = [1, 0, 2, 3, 0, 4, 5, 0];

console.log(duplicateZero(arr));
