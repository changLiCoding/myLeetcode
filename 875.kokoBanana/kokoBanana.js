function kokoBanana(piles, h) {
  const total = piles.reduce((acc, curr) => acc + curr, 0);

  let minRate = Math.ceil(total / h);
  let maxRate = Math.max(...piles);

  let res = maxRate;

  while (minRate <= maxRate) {
    const midRate = Math.floor((minRate + maxRate) / 2);
    const totalHours = piles.reduce(
      (acc, curr) => acc + Math.ceil(curr / midRate),
      0
    );

    if (totalHours <= h) {
      res = Math.min(res, midRate);
      maxRate = midRate - 1;
    } else {
      minRate = midRate + 1;
    }
  }

  return res;
}
