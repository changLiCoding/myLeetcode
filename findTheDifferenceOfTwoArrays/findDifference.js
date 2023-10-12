const remove = (arr, ele) => {
	return arr.filter((num) => num !== ele);
};

const findDifference = (nums1, nums2) => {
	let tempNums2 = nums2;
	const res = [[], []];
	for (let i = 0; i < nums1.length; i++) {
		if (nums2.includes(nums1[i])) {
			tempNums2 = tempNums2.filter((ele) => ele !== nums1[i]);
			nums1.splice(i, 1);
			i--;
		}
	}
	// res[0] = nums1.reduce((accV, currV) => {
	// 	return accV.includes(currV) ? accV : [...accV, currV];
	// }, []);
	// res[1] = tempNums2.reduce(
	// 	(accV, currV) => (accV.includes(currV) ? accV : [...accV, currV]),
	// 	[]
	// );
	res[0] = Array.from(new Set(nums1));
	res[1] = Array.from(new Set(tempNums2));
	return res;
};

const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];
const nums3 = [1, 2, 3, 3];
const nums4 = [1, 1, 2, 2];
const nums5 = [1, 2, 3, 3];
const nums6 = [1, 1, 2, 2];

console.log(findDifference(nums1, nums2));
console.log(findDifference(nums3, nums4));
console.log(findDifference(nums5, nums6));
