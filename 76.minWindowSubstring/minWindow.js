function minWindow (s, t) {
  if (t === "" || s.length < t.length ) return "";
  const countT = new Map();
  const window = new Map();
  for (let c of t) {
    countT.set(c, (countT.get(c) || 0) + 1);
  }

  let l = 0, res = [-1, -1], resLen = Infinity;
  let has = 0, need = countT.size;

  for (let r = 0; r < s.length; r++) {
    const char = s[r];

    window.set(char, (window.get(char) || 0) + 1);

    if (countT.has(char) && window.get(char) === countT.get(char)) {
      has++
    }

    while (has === need) {
      if (r - l + 1 < resLen) {
        resLen = r -l + 1;
        res = [l, r];
      }
      const charL = s[l];
      window.set(charL, window.get(charL) - 1);
      if (countT.has(charL) && countT.get(charL) > window.get(charL)) {
        has--
      }
      l++
    }
  }

  if (resLen === Infinity) {
    return "";
  } else {
    return s.substring(res[0], res[1] + 1)
  }
}

function min (s, t) {
  if (t === "" || s.length < t.length ) return "";
  const countT = new Map();
  const window = new Map();
  for (let c of t) {
    countT.set(c, (countT.get(c) || 0) + 1);
  }

  let l = 0, res = [-1, -1], resLen = Infinity;
  let has = 0, need = countT.size;

  for (let r = 0; r < s.length; r++) {
    const char = s[r];

    window.set(char, (window.get(char) || 0) + 1);

    if (countT.has(char) && window.get(char) === countT.get(char)) {
      has++
    }

    while (has === need) {
      if (r - l + 1 < resLen) {
        resLen = r -l + 1;
        res = [l, r];
      }
      const charL = s[l];
      window.set(charL, window.get(charL) - 1);
      if (countT.has(charL) && countT.get(charL) > window.get(charL)) {
        has--
      }
      l++
    }
  }

  if (resLen === Infinity) {
    return "";
  } else {
    return s.substring(res[0], res[1] + 1)
  }
}