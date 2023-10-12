// const gcdOfStrings = function (str1, str2) {
// 	if (str1 + str2 !== str2 + str1) {
// 		return "";
// 	}

// 	let n = str1.length;

// 	let k = str2.length;

// 	let gcds = function (x, y) {
// 		if (!y) {
// 			return x;
// 		}
// 		return gcds(y, x % y);
// 	};

// 	let div = gcds(n, k);

// 	return str1.slice(0, div);
// };

const gcdOfStrings = (str1, str2) => {
	if (str1 + str2 !== str2 + str1) {
		return "";
	} else if (str1.length === str2.length) {
		return str1;
	} else if (str1.length > str2.length) {
		return gcdOfStrings(str1.substring(str2.length), str2);
	} else if (str1.length < str2.length) {
		return gcdOfStrings(str2.substring(str1.length), str1);
	}
};

const str1 = "ABCABC";
const str2 = "ABC";
const str3 = "ABABAB";
const str4 = "ABAB";
const str5 = "LEET";
const str6 = "CODE";
const str7 = "A";
const str8 = "ABCABDABEABF";
console.log(gcdOfStrings(str1, str2));
console.log(gcdOfStrings(str3, str4));
console.log(gcdOfStrings(str5, str6));
console.log(gcdOfStrings(str7, str8));
