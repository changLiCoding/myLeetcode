const singleNumber = function(nums) {
  if (nums.length <= 1) return nums[0];
  const stack = {};
  nums.forEach((num, i) => {
    if (!stack[num]) {
      stack[num] = 1;
    } else {
      stack[num]++;
    }
  });

  for (const key in stack) {
    if (stack[key] === 1) {
      return key;
    }
  }

};


const nums = [4, 1, 2, 1, 2];

console.log(singleNumber(nums));
