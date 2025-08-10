function longestConsecut(nums) {
  const numSet = new Set(nums);
  let maxLen = 0;
  for (let num of numSet) {
    let lastTarget = num - 1;
    let nextTarget = num + 1;
    let current = 1;
    while (!numSet.has(lastTarget) && numSet.has(nextTarget)) {
      nextTarget++;
      current++;
    }

    maxLen = Math.max(maxLen, current);
  }

  return maxLen;
}