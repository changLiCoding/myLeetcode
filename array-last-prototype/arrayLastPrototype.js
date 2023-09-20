Array.prototype.last = function () {
	return this.length > 0 ? this[this.length - 1] : -1;
};

const arr1 = [];

const arr2 = [
	1,
	1231,
	52,
	12423,
	45,
	234,
	23,
	3465,
	23,
	42,
	43,
	56234,
	23,
	41,
	6,
	23,
	,
	1234,
];
console.log(arr1.last());
console.log(arr2.last());
