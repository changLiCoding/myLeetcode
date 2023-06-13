/* eslint-disable */

const curryFunction = (first) =>
	function (second) {
		return first * second;
	};

console.log(curryFunction(4)(9));

const firstCurry = curryFunction(8);

console.log(firstCurry(2));

const realCurry = (cb) => {
	const arity = cb.length;
	return function f1(...args) {
		if (arity <= args.length) {
			return cb(...args);
		} else {
			return function f2(...moreArgs) {
				const newArgs = args.concat(moreArgs);
				return f1(...newArgs);
			};
		}
	};
};

const curriedSum = realCurry((a, b, c) => a + b + c);

console.log(curriedSum(2, 6, 7));
console.log(curriedSum(2));
const partiallyCurriedFunction = curriedSum(2);
console.log(partiallyCurriedFunction(6, 7));
