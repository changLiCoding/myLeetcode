function findMin (nums) {
  let res = Infinity, l = 0, r = nums.length - 1;
  while (l <= r) {
    if (nums[l] <= nums[r]) {
      res = Math.min(res, nums[l]);
      break;
    }

    const mid = Math.floor((l + r) / 2);
    res = Math.min(res, nums[mid]);
    if (nums[mid] >= nums[r]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return res;
}