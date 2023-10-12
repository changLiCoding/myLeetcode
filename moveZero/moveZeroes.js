const moveZeroes = (arr) => {
	const zeroes = [];

	const noZero = arr.filter((num) => {
		if (num !== 0) {
			return true;
		} else {
			zeroes.push(0);
			return false;
		}
	});

	for (let i = 0; i < noZero.length; i++) {
		if (arr[i] === 0) {
			arr.splice(i, 1);
			i--;
			arr.push(0);
		}
	}

	// console.log(noZero);

	// const newArr = noZero.concat(zeroes);

	return arr;
};

const nums = [0, 1, 0, 3, 12];
const nums1 = [0];

console.log(moveZeroes(nums));
console.log(moveZeroes(nums1));
