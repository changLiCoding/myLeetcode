/* eslint-disable */

const addTo = function () {
	let inner = 2;
	return {
		increment: function () {
			inner++;
		},
		get: function () {
			return inner;
		},
	};
};

const secretCounter = addTo();
secretCounter.increment();
console.log(secretCounter.get());
secretCounter.increment();
console.log(secretCounter.get());
secretCounter.increment();
console.log(secretCounter.get());

const secretAdd = function (pass) {
	const inner = 2;
	return function (num) {
		return inner + num + pass;
	};
};
const outer = secretAdd(3);

console.dir(outer);

console.log(outer(6));

console.log(secretAdd(2)(3));
