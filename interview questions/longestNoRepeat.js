const str = "abcddddddefghijkkklmiop";

const longestNotRepeat = (string) => {
	const strContainer = [""]; //["abcd", "efghijk", "lmiop"]

	let pointer = 0;

	for (let i = 0; i < string.length; i++) {
		if (i !== 0 && strContainer[pointer].includes(string[i])) {
			if (string[i] === string[i + 1]) {
				continue;
			}
			pointer += 1;
			strContainer[pointer] = string[i];
			continue;
		} else {
			strContainer[pointer] = strContainer[pointer].concat(string[i]);
		}
	}

	// for (let char of string) {
	// 	if(strContainer[pointer].includes(char))
	// }
	let largestIndex = 0;
	let longest = 0;
	for (let y = 0; y < strContainer.length; y++) {
		console.log(strContainer[y], largestIndex, longest);
		if (strContainer[y].length > longest) {
			console.log(longest, largestIndex);
			longest = strContainer[y].length;
			largestIndex = y;
		}
	}

	return strContainer[largestIndex];
};

console.log(longestNotRepeat(str));
