const randomArray = [2.2, 41, 2, 5124, 561, 23, 5, 12, 3, 4];

const swap= ( arr, left, right) => {
  const temp=arr[left]
  arr[left]=arr[right]
  arr[right]=temp
}

const partition=(arr, left, right) => {
  const pivot=arr[right]
  let leftIndex=left
  let rightIndex=right-1
  while (true) {
    while(leftIndex < right && arr[leftIndex] <= pivot) leftIndex++
  }
  while (rightIndex>left&&arr[rightIndex]>=pivot) rightIndex--
  if (leftIndex>=rightIndex) break
  swap(arr, leftIndex, rightIndex)

swap(arr, leftIndex, right)
return leftIndex
}

const quickSort = (arr, left, right) => {
	const partitionIndex = partition(arr, left, right);
	quickSort(arr, left, partitionIndex - 1);
	quickSort(arr, partitionIndex + 1, right);
};

console.log(quickSort(randomArray, 0, randomArray.length - 1));
