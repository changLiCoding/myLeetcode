// const singleNumber = function(nums) {
//   if (nums.length <= 1) return nums[0];
//   const stack = {};
//   nums.forEach((num, i) => {
//     if (!stack[num]) {
//       stack[num] = 1;
//     } else {
//       stack[num]++;
//     }
//   });

//   for (const key in stack) {
//     if (stack[key] === 1) {
//       return key;
//     }
//   }

// };

// var singleNumber = function (nums) {
// 	if (nums.length === 1) return nums[0];

// 	const stack = {};

// 	nums.forEach((element) => {
// 		if (stack[element]) {
// 			stack[element]++;
// 		} else {
// 			stack[element] = 1;
// 		}
// 	});

// 	for (let key in stack) {
// 		if (stack[key] === 1) {
// 			return key;
// 		}
// 	}
// };

const singleNumber = (arr) => {
	if (arr.length <= 1) return arr[0];
	for (let i = 0; i < arr.length; i++) {
		const newArr = arr.filter((num) => num != arr[i]);

		if (newArr.length === arr.length - 1) {
			return arr[i];
		}
	}
};

const nums = [4, 1, 2, 1, 2];
const nums1 = [1, 1, 2, 3, 4, 5, 4, 5, 3, -1, 2];
const nums2 = [1, 4, 5, 3, 2];

// console.log(singleNumber(nums));
console.log(singleNumber(nums));
console.log(singleNumber(nums1));
console.log(singleNumber(nums2));
