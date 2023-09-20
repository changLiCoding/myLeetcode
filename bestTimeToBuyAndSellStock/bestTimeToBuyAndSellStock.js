const maxProfit = (prices) => {
	let max = 0;
	let buy = 0;
	let sell = 1;
	while (sell < prices.length) {
		if (prices[buy] < prices[sell]) {
			let profit = prices[sell] - prices[buy]; // our current profit

			max = Math.max(max, profit);
		} else {
			buy = sell;
		}
		sell++;
	}
	return max;
};

const prices = [7, 1, 5, 3, 6, 4];
const prices1 = [7, 6, 4, 3, 1];

console.log(maxProfit(prices));
console.log(maxProfit(prices1));
