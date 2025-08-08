function search(nums, target) {
  // let l = 0,
  //   r = nums.length - 1;

  // while (l <= r) {
  //   const mid = Math.floor((r + l) /2);
  //   if (nums[mid] === target) return mid;

  //   if (nums[mid] >= nums[l]) {
  //     if (target > nums[mid] || target < nums[l]) {

  //       l = mid + 1;
  //     } else {
  //       r = mid - 1;
  //     }
  //   } else {
  //     if (target < nums[mid] || target > nums[r]) {

  //       r = mid - 1;
  //     } else {
  //       l = mid + 1
  //     }
  //   }
  // }

  // return -1;

  let l = 0, r = nums.length - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);

    if (nums[mid] === target) return mid;
    if (nums[mid] >= nums[l]) {
      if (target > nums[mid] || target < nums[l]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    } else {
      if (target < nums[mid] || target > nums[r]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }

  return -1;
}
