function maxWaterArea (heights) {
  let l = 0;
  let r = heights.length - 1;
  let maxArea = 0;

  while (r > l) {
    const currentArea = (r - l) * Math.min(heights[l], heights[r]);

    maxArea = Math.max(currentArea, maxArea);

    if (heights[l] > heights[r]) {
      r--
    } else {
      l++
    }

  }


  return maxArea;
}