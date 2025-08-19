function findMedianSortedArray (arr1, arr2) {
  const sortedArr = (arr1.concate(arr2)).sort((a, b) => a - b);
  const mid = Math.floor(sortedArr.length / 2);
  if (sortedArr.length % 2 === 0) {
    const firstNum = sortedArr[mid - 1];
    const secNum = sortedArr[mid];
    return (firstNum + secNum) / 2
  } else {
    return sortedArr[mid];
  }
}