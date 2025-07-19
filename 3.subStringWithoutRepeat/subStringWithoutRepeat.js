function lengthOfLongestSubstring (s) {
  if (s.length <= 1) return s.length;

  let l = 0;
  let maxLength = 0;
  const sSet = new Set();

  for (let r = 0; r < s.length; r++) {
    
    while(sSet.has(s[r])) {
      sSet.delete(s[l]);
      l++;
    }


    sSet.add(s[r]);
    const currentLength = r - l + 1;
    maxLength = Math.max(maxLength, currentLength);
  }


  return maxLength
}