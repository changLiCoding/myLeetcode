const gcdOfStrings = function (str1, str2) {
	if (str1 + str2 !== str2 + str1) {
		return "";
	}

	let n = str1.length;

	let k = str2.length;

	let gcds = function (x, y) {
		if (!y) {
			return x;
		}
		return gcds(y, x % y);
	};

	let div = gcds(n, k);

	return str1.slice(0, div);
};
