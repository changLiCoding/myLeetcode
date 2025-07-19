function twoSum(nums, target) {
  const numMap = new Map();

  for (let i in nums) {
    const targetNum = target - nums[i];

    if (numMap.has(targetNum)) {
      return [parseInt(numMap.get(targetNum)) + 1 , parseInt(i) + 1]
    }

    numMap.set(nums[i], parseInt(i));
  }
}