var kidsWithCandies = function (candies, extraCandies) {
	let max = candies.reduce((a, b) => Math.max(a, b), -Infinity);
	let res = [];
	for (let i = 0; i < candies.length; i++) {
		if (extraCandies + candies[i] >= max) res[i] = true;
		else res[i] = false;
	}
	return res;
};
