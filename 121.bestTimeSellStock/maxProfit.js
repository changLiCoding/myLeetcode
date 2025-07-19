function maxProfit(prices) {

  let max = 0;
  let b = 0;
  let s = 1;

  while (s < prices.length && b < s) {
    const profit = prices[s] - prices[b];

    max = Math.max(max, profit);

    if (prices[s] > prices[b]) {
      s++
    } else {
      b = s;
      s++
    }
  }

  return max

}