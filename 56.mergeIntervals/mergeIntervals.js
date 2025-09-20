function mergeIntervals (intervals) {

  intervals.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  })

  const res = intervals[0];

  for (const interval of intervals) {
    const [first, last] = interval;
    const [resFirst, resLast] = res.at(-1);

    if (first > resLast) {
      res.push(interval);
    } else {
      if (last > resLast) {
        res.at(-1)[1] = last;
      }
    }
  }

  return res
}