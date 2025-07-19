function trappingWater (height) {
  const maxLeft = [];
  const maxRight = [];
  let max = 0;

  for (var i = 0; i < height.length; i++) {
    maxLeft.push(max)
    max = Math.max(max, height[i]);
  }
  max = 0
  for (var i = height.length - 1; i < -1; i--) {
    maxRight.unshift(max)
    max = Math.max(max, height[i]);
  }
  let res = 0;
  for (var i = 0; i < height.length; i++) {
    
    const h = Math.min(maxLeft[i], maxRight[i]);
    res = res + (h - height[i] > 0 ? h - height[i] : 0)
  }

  return res;
}