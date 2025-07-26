function twoSum(nums, target) {
  // const numMap = new Map();

  // for (let i in nums) {
  //   const targetNum = target - nums[i];

  //   if (numMap.has(targetNum)) {
  //     return [parseInt(numMap.get(targetNum)) + 1 , parseInt(i) + 1]
  //   }

  //   numMap.set(nums[i], parseInt(i));
  // }

  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const theOtherNum = target - nums[i];

    if (map.has(theOtherNum)) {
      return [i, map.get(theOtherNum)]
    }

    map.set(nums[i], i);
  }
}