function largestRectangleArea(heights) {
  let maxArea = 0;
  const stack = [];

  for (let i = 0; i < heights.length; i++) {
    let start = i;
    while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
      const [index, height] = stack.pop();

      maxArea = Math.max(maxArea, height * (i - index));
      start = index;
    }

    stack.push([start, heights[i]]);
  }
  console.log(stack);
  for (let i = 0; i < stack.length; i++) {
    const [index, height] = stack[i];
    maxArea = Math.max(maxArea, height * (heights.length - index));
  }

  return maxArea;
}
