// function maxProfit(prices) {

//   let max = 0;
//   let b = 0;
//   let s = 1;

//   while (s < prices.length && b < s) {
//     const profit = prices[s] - prices[b];

//     max = Math.max(max, profit);

//     if (prices[s] > prices[b]) {
//       s++
//     } else {
//       b = s;
//       s++
//     }
//   }

//   return max

// }


const bestDeal = (nums) => {
  let left = 0, right = 1;
  const res = [];
  let max = - Infinity;
  while (right < nums.length && left < right) {
    const current = nums[right] - nums[left];
    max = Math.max(max, current);
      if (nums[left] > nums[right]) {
        left = right;
        right++;
      } else {
        right++;
      }

  }

  return max
}

const bestSell = (prices) => {

}

const  maxProfit = (prices) => {
  let buy = 0, sell = 1;

  const res = [];

  let max = - Infinity;
  while (sell < prices.length && buy < sell) {
    const profit = prices[sell] - prices[buy];
    max = Math.max(max, profit);

    if (prices[buy] > prices[sell] ) {
      buy = sell;
      sell++;
    } else {
      sell++;
    }
  }

  return max
}