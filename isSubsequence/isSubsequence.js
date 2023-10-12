// const isSubsequence = (s, t) => {
// 	if (s.length > t.length) return false;

// 	const arr = t.split("");
// 	const arrS = Array.from(new Set(s.split("")));
// 	const arrT = Array.from(new Set(arr));
// 	console.log("arrS", arrS);
// 	console.log("arrT", arrT);
// 	if (arrS.length > arrT.length) return false;
// 	for (let i = 0; i < arrT.length; i++) {
// 		if (!s.includes(arrT[i])) {
// 			arrT.splice(i, 1);
// 			i--;
// 		}
// 	}
// 	console.log("t", arrT);
// 	console.log("s", arrS);
// 	if (arrS.length > arrT.length) return false;

// 	return arrT.join("").includes(arrS.join(""));
// };

const isSubsequence = (s, t) => {
	if (s.length > t.length) return false;
	let subsequence = 0;
	for (let i = 0; i < t.length; i++) {
		if (s[subsequence] === t[i]) {
			subsequence++;
		}
	}
	return subsequence === s.length;
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
console.log(isSubsequence("aaaaaa", "bbaaaa"));
