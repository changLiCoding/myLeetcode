


function binarySearch(nums, target) {

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const midIndex = Math.floor((left + right) / 2);

    if (nums[midIndex] > target) {
      right = midIndex - 1
    } else if (nums[midIndex] < target) {
      left = midIndex + 1
    } else {
      return midIndex
    }
  }
  return -1;
}