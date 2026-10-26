// function binarySearch2 (target: number, arr: number[]): number {
//   let l = 0, r = arr.length - 1;

//   while (l < arr.length && r >= 0 && l <= r) {
//     const mid = Math.floor((l + r) / 2)

//     if (arr[mid] === target) return mid;

//     if (arr[mid] < target) {
//       l = mid + 1;
//     } else {
//       r = mid - 1;
//     }
//   }
//   return -1
// }

function binarySearch2(target: number, nums: number[]): number {
  let l = 0, r = nums.length - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) return mid;

    if (nums[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return -1
}