const climbStairs = (n) => {
  let results = new Array(n + 1);

  results[0] = 1;
  results[1] = 1;
  results[2] = 2;
  for (let i = 3; i < n; i++) {
    results[i] = results[i - 1] + results[i - 2];
    console.log(results[i]);
  }
  return results[n];
};


console.log(climbStairs(44));
