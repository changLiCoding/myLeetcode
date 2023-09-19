/* eslint-disable */

const randomArray = [2.2, 41, 2, 5124, 561, 23, 5, 12, 3, 4];

// const sortedArray = (arr) => {
// 	for (let key = 0; key < arr.length; key++) {
// 		for (let i = key + 1; i < arr.length; i++) {
// 			if (arr[key] > arr[i]) {
// 				let temp = arr[key];
// 				arr[key] = arr[i];
// 				arr[i] = temp;
// 			}
// 		}
// 	}
// 	return arr;
// };

const sortAnArray = (arr) => {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let y = i + 1; y < arr.length; y++) {
			if (arr[i] > arr[y]) {
				const temp = arr[i];

				arr[i] = arr[y];

				arr[y] = temp;
			}
		}
	}

	return arr;
};

// const sortedArray = (arr) => console.log(sortedArray(randomArray));
// console.log(randomArray.sort((a, b) => a - b));

console.log(sortAnArray(randomArray));
