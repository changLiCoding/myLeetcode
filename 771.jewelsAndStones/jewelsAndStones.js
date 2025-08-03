function numJewelsInStones (jewels, stones) {
  const jewelsMap = new Map();
  let count = 0;
  for (let j of jewels) {
    if (!jewelsMap.has(j)) {
      jewelsMap.set(j, true);
    }
  }

  for (let s of stones) {
    if (jewelsMap.has(s)) {
      count++
    }
  }
  return count;
}