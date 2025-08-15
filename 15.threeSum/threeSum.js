function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const res = [];
  console.log("nums: ", nums);

  for (var i in nums) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        res.push([nums[i], nums[left], nums[right]]);
        right--;
        left++;
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
      }
    }
  }

  return res;
}


const threeSumZero = (arr) => {
  const res = []
  const sortedArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length - 3; i++) {
    
    const fristNum = sortedArr[i];
    if (fristNum > 0) break;
    if (i > 0 && fristNum === sortedArr[i - 1]) continue;

    let l = i + 1, r = arr.length - 1;
    const target = 0 - fristNum;
    while (l < r) {
      
      let sec = sortedArr[l], thd = sortedArr[r];

      if (sec + thd > target) {
        r--;
      } else if (sec + thd < target) {
        l++;
      } else {
        res.push(fristNum, sec, thd)
        r--;
        l++;
        while(l < r && sortedArr[l] === sortedArr[l - 1]) {
          l++;
        }
      }
    }
  }

  return res;
}

const mergeArr = (arr1, arr2) => {
  const res = [];

  let one = 0, two = 0;

  while (one < arr1.length && two < arr2.length) {
    if (arr1[one] <= arr2[two]) {
      res.push(arr1[one]);
      one++;
    } else {
      res.push(arr2[two]);
      two++;
    }
  }

  if (one < arr1.length) res.push(...arr1.slice(one));
  if (two < arr2.length) res.push(...arr2.slice(two));


  return res;
}