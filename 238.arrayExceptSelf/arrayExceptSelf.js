function productExceptSelf(nums) {
  let all = 1;
  let zeroCount = 0;

  for (var num of nums) {
    if (!num) {
      zeroCount++;
    } else {
      all = all * num;
    }
  }

  if (zeroCount > 1) {
    return Array(nums.length).fill(0);
  }

  const res = Array(nums.length).fill(1);

  for (var i in nums) {
    if (nums[i] === 0) {
      res[i] = all;
    } else if (nums[i] !== 0 && zeroCount === 1) {
      res[i] = 0;
    } else {
      res[i] = all / nums[i];
    }
  }

  return res;
}
