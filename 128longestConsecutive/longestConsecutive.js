function longestConsecutive(nums) {
  // nums.sort((a,b) => a - b);
  // console.log('sortedNums: ', nums);
  const numSet = new Set(nums);
  // let left = 0;
  // let right = 1;

  let maxLen = 0;

  // for (let num of numSet) {
  //     if (!numSet.has(num - 1)) {
  //         let length = 1;
  //         while (numSet.has(num + length)) {
  //             length++;
  //         }
  //         maxLen = Math.max(maxLen, length);
  //     }
  // }

  for (let num of numSet) {
    let lastTarget = num - 1;
    let nextTarget = num + 1;
    let current = 1;
    console.log(num, lastTarget, nextTarget, current);
    while (!numSet.has(lastTarget) && numSet.has(nextTarget)) {
      nextTarget++;
      current++;
    }
    console.log("in the while loop", num, nextTarget, current);
    maxLen = Math.max(maxLen, current);
  }

  return maxLen;
}
