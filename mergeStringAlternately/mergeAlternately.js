// const mergeAlternately = (word1, word2) => {
// 	let result = "";
// 	for (let i = 0; i < word1.length || i < word2.length; i++) {
// 		if (word1[i]) result += word1[i];
// 		if (word2[i]) result += word2[i];
// 	}
// 	return result;
// };

// const mergeAlternately = (word1, word2) => {
// 	const word1Arr = word1.split("");
// 	const word2Arr = word2.split("");
// 	const length1 = word1Arr.length;
// 	const length2 = word2Arr.length;
// 	const res = [];
// 	if (length1 >= length2) {
// 		for (let i = 0; i < length1; i++) {
// 			const char1 = word1Arr[i];
// 			const char2 = word2Arr[i];

// 			if (char1) res.push(char1);
// 			if (char2) res.push(char2);
// 		}
// 	} else {
// 		for (let i = 0; i < length2; i++) {
// 			const char1 = word1Arr[i];
// 			const char2 = word2Arr[i];

// 			if (char1) res.push(char1);
// 			if (char2) res.push(char2);
// 		}
// 	}
// 	return res.join("");
// };

// const mergeAlternately = (word1, word2) => {
// 	let res = "";

// 	for (let i = 0; i < word1.length || i < word2.length; i++) {
// 		if (word1[i]) {
// 			res = res + word1[i];
// 		}
// 		if (word2[i]) {
// 			res = res + word2[i];
// 		}
// 	}
// 	return res;
// };

const mergeAlternately = (word1, word2) => {
	const res = [];

	for (let i = 0; i < word1.length || i < word2.length; i++) {
		if (word1[i]) res.push(word1[i]);
		if (word2[i]) res.push(word2[i]);
	}

	return res;
};

const word1 = "abcd";

const word2 = "pq";

console.log(mergeAlternately(word1, word2));

const mergeTwoArr = (arr1, arr2) => {
  let i = 0, j = 0;
  const res = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] >= arr2[j]) {
      res.push(arr2[j]);
      j++;
    } else {
      res.push(arr1[i]);
      i++;
    }
  }

  if (i < arr1.length) res.push(...arr1.slice(i));
  if (j < arr2.length) res.push(...arr2.slice(j));

  return res;
}