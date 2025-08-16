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


const search = (arr, target) => {
  let l = 0, r = arr.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);

    if (arr[mid] < target) {
      l = mid + 1;
    } else if (arr[mid] < target) {
      r = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}

const search2 = (arr, target) => {
  let l = 0, r = arr.length - 1;

  while (l <= r) {
    const mid = Math.floor((r + l) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] >= arr[l]) {
      if (target > arr[mid] || target < arr[l]) {
        l = mid + 1;

      } else {
        r = mid - 1;
      }

    } else {
      if (target < arr[mid] || target > arr[r] ) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }

  return -1;
}