var searchMatrix = function (matrix, target) {
  let possibleIndex = -1;

  for (let i in matrix) {
    const arr = matrix[i];

    if (arr[0] <= target && arr.at(-1) >= target) {
      possibleIndex = i;
      break;
    }
  }

  if (possibleIndex === -1) return false;

  const arr = matrix[possibleIndex];
  let l = 0,
    r = arr.length - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return false;
};
