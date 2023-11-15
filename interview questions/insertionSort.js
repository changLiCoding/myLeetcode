/* eslint-disable */

const randomArray = [2.2, 41, 2, 5124, 561, 23, 5, 12, 3, 4];

// const insertionSort = (arr) => {
// 	for (let i = 1; i < arr.length; i++) {
// 		let cur = arr[i];
// 		let insertionIndex = i - 1;
// 		while (insertionIndex >= 0 && arr[insertionIndex] > cur) {
// 			arr[insertionIndex + 1] = arr[insertionIndex];
// 			insertionIndex--;
// 		}
// 		arr[insertionIndex + 1] = cur;
// 	}
// 	return arr;
// };

// console.log(insertionSort(randomArray));

// const insertionSorting = (arr) => {
// 	console.log("something");
// 	for (let i = 1; i < arr.length; i++) {
// 		const currentValue = arr[i];
// 		let insertedIndex = i - 1;

// 		while (insertedIndex >= 0 && arr[insertedIndex] > currentValue) {
// 			arr[insertedIndex + 1] = arr[insertedIndex];
// 			insertedIndex--;
// 		}

// 		arr[insertedIndex + 1] = currentValue;
// 		console.log(arr);
// 	}
// 	return arr;
// };

// const insertionSorting = (arr) => {
// 	for (let i = 1; i < arr.length; i++) {
// 		let insertedIndex = i - 1;
// 		const currentValue = arr[i];
// 		while (insertedIndex >= 0 && currentValue < arr[insertedIndex]) {
// 			arr[insertedIndex + 1] = arr[insertedIndex];
// 			insertedIndex--;
// 		}
// 		arr[insertedIndex + 1] = currentValue;
// 	}
// 	return arr;
// };

// const insertionSorting = (arr) => {
// 	for (let i = 1; i < arr.length; i++) {
// 		const currentValue = arr[i];
// 		let insertedIndex = i - 1;

// 		while (insertedIndex >= 0 && currentValue <= arr[insertedIndex]) {
// 			arr[insertedIndex + 1] = arr[insertedIndex];
// 			insertedIndex--;
// 		}

// 		arr[insertedIndex + 1] = currentValue;
// 	}

// 	return arr;
// };

// const insertionSorting = (arr) => {
// 	for (let i = 1; i < arr.length; i++) {
// 		let insertedIndex = i - 1;
// 		const currentValue = arr[i];
// 		while (insertedIndex >= 0 && arr[insertedIndex] >= currentValue) {
// 			arr[insertedIndex + 1] = arr[insertedIndex];
// 			insertedIndex--;
// 		}
// 		arr[insertedIndex + 1] = currentValue;
// 	}
// 	return arr;
// };

// const insertionSorting = (arr) => {
// 	let i = 1;
// 	while (i < arr.length) {
// 		const currentValue = arr[i];
// 		for (let insertedIndex = i - 1; insertedIndex >= 0; insertedIndex--) {
// 			if (currentValue >= arr[insertedIndex]) {
// 				arr[insertedIndex + 1] = currentValue;
// 				break;
// 			}
// 			arr[insertedIndex + 1] = arr[insertedIndex];
// 		}
// 		i++;
// 	}
// 	return arr;
// };

// const insertionSorting = (arr) => {
// 	for (let i = 1; i < arr.length; i++) {
// 		const currentValue = arr[i];
// 		let insertedIndex = i - 1;
// 		while (insertedIndex >= 0 && currentValue < arr[insertedIndex]) {
// 			arr[insertedIndex + 1] = arr[insertedIndex];
// 			insertedIndex--;
// 		}
// 		arr[insertedIndex + 1] = currentValue;
// 	}
// 	return arr;
// };

// const insertionSorting = (arr) => {
// 	for (let i = 1; i < arr.length; i++) {
// 		const curV = arr[i];
// 		let insertedIndex = i - 1;
// 		while (insertedIndex >= 0 && curV < arr[insertedIndex]) {
// 			arr[insertedIndex + 1] = arr[insertedIndex];
// 			insertedIndex--;
// 		}
// 		arr[insertedIndex + 1] = curV;
// 	}
// 	return arr;
// };

// const insertionSorting = (arr) => {
// 	for (let i = 1; i < arr.length; i++) {
// 		const currV = arr[i];
// 		let insertedIndex = i - 1;
// 		while (insertedIndex >= 0 && currV < arr[insertedIndex]) {
// 			arr[insertedIndex + 1] = arr[insertedIndex];
// 			insertedIndex--;
// 		}
// 		arr[insertedIndex + 1] = currV;
// 	}
// 	return arr;
// };

// const insertionSorting = (arr) => {
// 	for (let i = 1; i < arr.length; i++) {
// 		const currentValue = arr[i];
// 		let insertedIndex = i - 1;

// 		while (insertedIndex >= 0 && currentValue < arr[insertedIndex]) {
// 			arr[insertedIndex + 1] = arr[insertedIndex];
// 			insertedIndex--;
// 		}
// 		arr[insertedIndex + 1] = currentValue;
// 	}
// 	return arr;
// };

const insertionSorting = (arr) => {
	for (let i = 1; i < arr.length; i++) {
		const currentValue = arr[i];
		let insertedIndex = i - 1;
		while (insertedIndex >= 0 && currentValue < arr[insertedIndex]) {
			arr[insertedIndex + 1] = arr[insertedIndex];
			insertedIndex--;
		}
		arr[insertedIndex + 1] = currentValue;
	}
	return arr;
};

console.log(insertionSorting(randomArray));
