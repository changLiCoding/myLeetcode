function kokoBanana (piles, h) {

  const allBananas = piles.reduce((acc, curr) => acc + curr, 0);

  let minRate = Math.ceil(allBananas / h);
  let maxRate = Math.max(...piles);

  let res = maxRate;

  while (minRate <= maxRate) {
    const mid = Math.floor((minRate + maxRate) / 2)
    const totalHours = piles.reduce((acc, curr) => acc + Math.ceil(curr / mid), 0);

    if (totalHours <= h) {
      res = mid;
      maxRate = mid - 1;
    } else {
      minRate = mid + 1;
    }
  }

  return res;
}