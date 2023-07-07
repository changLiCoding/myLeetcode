const randomArray = [2.2, 41, 2, 5124, 561, 23, 5, 12, 3, 4];

const swap = (arr, left, right) => {
	const temp = arr[left];
	arr[left] = arr[right];
	arr[right] = temp;
};

const partition = (arr, left, right) => {
	const pivot = arr[Math.floor((left + right) / 2)];
	let leftIndex = left;
	let rightIndex = right;
	while (leftIndex <= rightIndex) {
		while (arr[leftIndex] < pivot) {
			leftIndex++;
		}
		while (arr[rightIndex] > pivot) {
			rightIndex--;
		}
		if (leftIndex <= rightIndex) {
			swap(arr, leftIndex, rightIndex);
			leftIndex++;
			rightIndex--;
		}
	}

	return leftIndex;
};

const quickSort = (arr, left, right) => {
	let index;

	if (arr.length > 1) {
		index = partition(arr, left, right);

		if (left < index - 1) {
			quickSort(arr, left, index - 1);
		}

		if (index < right) {
			quickSort(arr, index, right);
		}
	}
	return arr;
};

console.log(quickSort(randomArray, 0, randomArray.length - 1));
