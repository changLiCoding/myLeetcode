function isEqual(map1, map2) {
  if (map1.size !== map2.size) return false;

  for (let [key, val] of map1) {
    if (val !== map2.get(key)) return false;
  }
  return true;
}

function checkInclusion(s1, s2) {
  const s1Map = new Map();

  for (let s of s1) {
    s1Map.set(s, (s1Map.get(s) || 0) + 1);
  }

  const n = s1.length;
  const s2Map = new Map();
  for (let i = 0; i < n; i++) {
    const char = s2[i]
    s2Map.set(char, (s2Map.get(char) || 0) + 1);
  }

  if (isEqual(s1Map, s2Map)) return true;

  for (let i = n; i < s2.length; i++) {
    const newChar = s2[i];
    const oldChar = s2[i - n];
    s2Map.set(newChar, (s2Map.get(newChar) || 0) + 1);
    s2Map.set(oldChar, s2Map.get(oldChar) - 1);

    if (s2Map.get(oldChar) === 0) s2Map.delete(oldChar);

    if (isEqual(s1Map, s2Map)) return true
  }


  return false;
}