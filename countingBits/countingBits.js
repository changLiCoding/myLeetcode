// const absluteTwos = (num) => {
// 	console.log(num);
// 	if (num % 2 !== 0) {
// 		return false;
// 	} else if (num / 2 > 1) {
// 		return absluteTwos(num / 2);
// 	} else if (num / 2 === 1) {
// 		return true;
// 	}
// };

// console.log(absluteTwos(8));
// console.log(absluteTwos(7));
// console.log(absluteTwos(12));

// const countBits = (n) => {
// 	const res = new Array(n + 1).fill(0);
// 	let sub = 1;
// 	for (let i = 1; i <= n; i++) {
// 		if (sub * 2 === i) {
// 			sub = i;
// 		}

// 		res[i] = res[i - sub] + 1;
// 	}
// 	return res;
// };

const countBits = (n) => {
	const binarys = new Array(n + 1);

	for (let i = 0; i < n + 1; i++) {
		binarys[i] = i.toString(2);
	}
	// console.log(binarys);

	const res = binarys.reduce((accContainer, currNum) => {
		const decimalSum = currNum
			.split("")
			.reduce((acc, currt) => parseInt(acc) + parseInt(currt), 0);
		return [...accContainer, decimalSum];
	}, []);
	return res;
};

console.log(countBits(8));
console.log(countBits(11));
console.log(countBits(42));
console.log(countBits(5));
console.log(countBits(9));
console.log(countBits(85723));

// 1000 4* 2 8 23

// 111 2*2+2*1+1  7 22 21 20

// 110 2*2 + 2*1  6 22 21

// 101 2*2+1  5 22 20

// 100 2 * 2  4 / 2
