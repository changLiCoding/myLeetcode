// const VOWELS = "aeiouAEIOU";
// var reverseVowels = function (s) {
// 	const arr = [...s];

// 	for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
// 		while (!VOWELS.includes(arr[i]) && i < j) {
// 			i++;
// 		}

// 		while (!VOWELS.includes(arr[j]) && i < j) {
// 			j--;
// 		}

// 		[arr[i], arr[j]] = [arr[j], arr[i]];
// 	}

// 	return arr.join("");
// };

const isVowel = (char) => {
	return ["a", "e", "i", "o", "u"].includes(char.toLowerCase());
};

const swapVowels = (arr, start, end) => {
	const temp = arr[start];
	arr[start] = arr[end];
	arr[end] = temp;
	return arr;
};

const reverseVowels = (s) => {
	const arr = s.split("");
	let start = 0;
	let end = s.length - 1;

	while (start < end) {
		while (!isVowel(arr[start]) && start < end) {
			start++;
		}
		while (!isVowel(arr[end]) && start < end) {
			end--;
		}
		if (start < end) {
			swapVowels(arr, start, end);
		}
		start++;
		end--;
	}
	return arr.join("");
};
