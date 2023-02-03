const breakingRecords = function(scores) {
  // Write your code here
  let highS = scores[0];
  let lowS = scores[0];
  const res = [0, 0];
  for (let i = 1; i < scores.length; i++) {
    console.log(highS, lowS, scores[i]);
    if (scores[i] > highS) {
      highS = scores[i];
      res[0]++;
    } else if (scores[i] < lowS) {
      lowS = scores[i];
      res[1]++;
    }
  }

  return res;
};
