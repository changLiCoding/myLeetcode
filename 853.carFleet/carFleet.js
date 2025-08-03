function carFleet(target, position, speed) {
  const sortedPair = position.map((p, i) => {
    return [p,speed[i]]
  }).sort((a, b) => b[0] - a[0]);

  let fleet = 1;
  if (sortedPair.length === 1) return 1;
  let prevTimeToTarget = (target - sortedPair[0][0])/ sortedPair[0][1];

  for (let i = 1; i < sortedPair.length; i++) {
    const currTimeToTarget = (target - sortedPair[i][0])/ sortedPair[i][1];

    if (currTimeToTarget > prevTimeToTarget) {
      fleet++
      prevTimeToTarget = currTimeToTarget
    }

  }

  return fleet;
}