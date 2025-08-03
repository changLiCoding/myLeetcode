function carFleet(target, position, speed) {
  const cars = position
    .map((p, i) => {
      return [p, speed[i]];
    })
    .sort((a, b) => b[0] - a[0]);

  // let prevT = (target - cars[0][0]) / cars[0][1]
  const stack = [];
  for (let i = 0; i < cars.length; i++) {
    const currT = (target - cars[i][0]) / cars[i][1];
    stack.push(cars[i]);

    if (stack && stack.length >= 2) {
      // && stack.at(-2) stack.at(-1)
      const prevT = (target - stack.at(-2)[0]) / stack.at(-2)[1];
      if (currT <= prevT) {
        fleet++;
        stack.pop();
      }
    }
  }

  return stack.length;
}
