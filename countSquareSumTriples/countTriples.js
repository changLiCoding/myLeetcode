const countTriples = (n) => {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      const res = Math.sqrt(Math.pow(i, 2) + Math.pow(j, 2));
      if (Number.isInteger(res) && res <= n) {
        count++;
      }
      console.log(res);

    }
  }
  return count*2;
};


console.log(countTriples(10));
