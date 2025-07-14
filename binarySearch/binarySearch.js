function binarySearch(nums, target) {
  const n = nums.length;
  let left = 0;
  let right = n - 1;

  while (left < right) {
    const mid = Math.floor(right - left);

    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}
