function charReplacement (s, k) {
  const charMap = new Map();

  let max = 0

  let l = 0


  for (let r = 0; r < s.length; r++) {
    charMap.set(s[r], (charMap.get(s[r]) || 0) + 1);

    const mostFreq = Math.max(...charMap.values());

    while (r - l + 1 - mostFreq > k) {
      charMap.set(s[l], charMap.get(s[l]) - 1 )
      l++
    }

    max = Math.max(r - l + 1, max);
  }
  return max;
}