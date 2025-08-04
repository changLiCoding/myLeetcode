function kokoBanana (piles, h) {

  const allBanana = piles.reduce((acc, curr) => acc + curr, 0);

  const maxRate = Math.max(...piles);
  const minRate = Math.ceil(allBanana / h);

  let l = minRate, r = maxRate, res = 0;

  while (l <= r) {
    const minRate = Math.floor((maxRate + minRate) /2);
    const hoursTook = piles.reduce((acc, curr) => acc + Math.ceil(curr / minRate), 0);
    if (hoursTook <= h) {
      res = hoursTook;
      r = minRate - 1;
    } else {
      l = minRate + 1;
    }
  }
  return res;
}