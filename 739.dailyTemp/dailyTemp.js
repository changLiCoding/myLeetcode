function dailyTemp (temps) {

  const n = temps.lenght;
  const res = Array(n).fill(0);

  const stack = [];

  for (let i = 0; i < n; i++) {

    const pair = [i, temps[i]];

    while (stack.length > 0 && stack.at(-1)[1] < pair[1]) {


      const popPair = stack.pop();
      res[popPair[0]] = i - popPair[0]
    }



      stack.push(pair);

  }

  return res;
}