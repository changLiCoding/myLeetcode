function findMin (nums) {
  let l = 0, r = nums.length - 1, res = nums[0];

  while (l <= r) {

    if (nums[l] <= nums[r]) {
      res = Math.min(nums[l], res);
      break;
    }
    const mid = Math.floor((l + r) / 2);
    res = Math.min(res, nums[mid]);
    // left sorted
    if (nums[mid] >= nums[l]) {
      l = mid + 1;
    // right sorted
    } else {
      r = mid - 1;
    }

  }

  return res;
}