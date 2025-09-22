function findMin(nums) {
  let l = 0,
    r = nums.length - 1,
    min = nums[0];

  while (l <= r) {
    if (nums[l] <= nums[r]) {
      min = Math.min(min, nums[l]);
      break;
    }

    const mid = Math.floor((l + r) / 2);
    min = Math.min(min, nums[mid]);

    if (nums[mid] >= nums[l]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return min;
}

function binaryFindMin(arr) {
  let min = (min = arr[0]);
  let l = 0,
    r = arr.length - 1;

  while (l <= r) {
    if (arr[l] <= arr[r]) {
      min = Math.min(min, arr[l]);
      break;
    }

    const mid = Math.floor((l + r) / 2);
    const current = arr[mid];

    min = Math.min(min, current);

    if (current >= arr[l]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return min;
}

function findMin (arr) {
  let min = arr[0], l = 0, r = arr.length - 1;

  while (l <= r) {

    if (arr[l] <= arr[r]) {
      min = Math.min(min, arr[l]);
      break;
    }
    const mid = Math.floor((l + r) / 2);
    const current = arr[mid];
    min = Math.min(min, current);

    if (current >= arr[l]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }

  }

  return min
}


function findMinBinary (arr, target) {
  let min = arr[0], l = 0, r = arr.length - 1;

  while (l <= r) {

    const mid = Math.floor((l + r) /2);
    const midVal = arr[mid];
    if (midVal === target) return mid;
    if ( arr[l] <= midVal) {
      if (target > midVal || target < arr[l]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    } else {
      if (target < midVal || target > arr[r]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }

  return -1;
}

function findTarget (arr, target) {
  let l = 0, r = arr.length - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) /2);

    if (arr[mid]===target) return mid;

    if (arr[mid] >= arr[l]) {
      if (target > arr[mid] || target < arr[l]) {
        l = mid + 1;
      } else {
        r = mid - 1
      }
    } else {
      if (target < arr[mid] || target > arr[r]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }


  return -1;
}

function findTargetInRotatedSortedList (arr, target) {
  let l = 0, r = arr.length - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) /2);

    if (arr[mid]===target) return mid;

    if (arr[mid] >= arr[l]) {
      if (target > arr[mid] || target < arr[l]) {
        l = mid + 1;
      } else {
        r = mid - 1
      }
    } else {
      if (target < arr[mid] || target > arr[r]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }


  return -1;
}

function min (nums) {
  let l = 0, r = nums.length - 1, min = nums[l];
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[l] <= nums[r]) {
      min = Math.min(min, nums[l]);
      break;
    }
    min = Math.min(min, nums[mid]);

    if (nums[l] <= nums[mid]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return min;
}