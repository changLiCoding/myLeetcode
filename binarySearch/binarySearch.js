function binarySearch (nums,target) {

  let l = 0;
  let r = nums.length();

  while (l <= r) {
    const mid = Math.floor((r + l) / 2);

    if (nums[mid] > target ) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid
    }
  }
  return -1;
}


