function evalRPN(tokens) {
  while (tokens.length > 1) {
    for (let i = 0; i < tokens.length; i++) {
      if ("+-*/".includes(tokens[i])) {
        const a = parseInt(tokens[i - 2]);
        const b = parseInt(tokens[i - 1]);
        let result;
        if (tokens[i] === "+") result = a + b;
        else if (tokens[i] === "-") result = a - b;
        else if (tokens[i] === "*") result = a * b;
        else if (tokens[i] === "/") result = Math.trunc(a / b);

        tokens.splice(i - 2, 3, result.toString());
        break;
      }
    }
  }
  return parseInt(tokens[0]);
}


var evalRPN = function(tokens) {

    const stack = [];
    tokens.forEach((v, i) => {
        if ('+-*/'.includes(v)) {
            const num2 = stack.shift();
            const num1 = stack.shift();
            const res = cal(v, num1, num2)

            stack.unshift(res);
        } else {
            stack.unshift(parseInt(v))
        }
    })    
    return stack[0];
};

var cal = function (op, num1, num2) {
    if (op === "+") return num1 + num2;
    if (op === "-") return num1 - num2;
    if (op === "*") return num1 * num2;
    if (op === "/") return Math.trunc(num1 / num2);
}