function dailyTemp (temperatures) {
  const n = temperatures.length
  const res = Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < n; i++) {

    const temp = temperatures[i];
    const pair = [temp, i];

    while (stack.length > 0 && temp > stack.at(-1)[0]) {
      const currentPair = stack.at(-1);
      const distance = i - currentPair[1];
      res[currentPair[1]] = distance;
      stack.pop();
    }

    stack.push(pair);
  }

  return res;
}

