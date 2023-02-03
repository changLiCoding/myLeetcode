const countDuplicate = (str) => {
  if (!str || str.length === 1) return 0;
  const stack = [];
  const lowerStr = str.toLowerCase();
  const result = [];

  for (let char of lowerStr) {
    if (!stack.includes(char)) {
      stack.push(char);
    } else {
      const index = stack.indexOf(char);
      const element = stack.splice(index, 1);

      if (!(result.includes(...element))) {
        result.push(...element);
      }
    }
  }

  return result.length;
};


console.log(countDuplicate('Indivisibilities'));
