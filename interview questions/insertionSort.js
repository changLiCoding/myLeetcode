/* eslint-disable */

const randomArray = [2.2, 41, 2, 5124, 561, 23, 5, 12, 3, 4];

const insertionSort = (arr) => {
	for (let i = 1; i < arr.length; i++) {
		let cur = arr[i];
		let insertionIndex = i - 1;
		while (insertionIndex >= 0 && arr[insertionIndex] > cur) {
			arr[insertionIndex + 1] = arr[insertionIndex];
			insertionIndex--;
		}
		arr[insertionIndex + 1] = cur;
	}
	return arr;
};

console.log(insertionSort(randomArray));
