/* eslint-disable */

const sample = [2, 2, "231", "asdfas", 2];

const addElementAtEnd = (arr, ele) => {
	return arr.concat(ele);
};

console.log(addElementAtEnd(sample, "Diablo VI"));
console.log(sample);

const addElementAtEnd2 = (arr, ele) => [...arr, ele];
console.log(addElementAtEnd2(sample, "Lies of P"));
console.log(sample);
