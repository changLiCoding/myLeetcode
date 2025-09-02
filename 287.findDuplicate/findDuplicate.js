function findDuplicate(nums) {
  // for (let i = 0; i < nums.length - 1; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //         if (nums[i] === nums[j]) {
  //             return nums[i]
  //         }
  //     }
  // }
  const arr = new Array(nums.length).fill(0);
  for (let num of nums) {
    if (arr[num - 1]) {
      return num;
    }

    arr[num - 1] = 1;
  }

  return -1;
}
