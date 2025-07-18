function isAlphanumeric(str) {
  return /^[a-zA-Z0-9]+$/.test(str);
}

function validPalindrome(str) {
  let right = str.length;
  let left = 0;

  while (left < right) {
    while (!isAlphanumeric(str[right])) {
      right--;
    }
    while (!isAlphanumeric(str[left])) {
      left++
    }

    if (str[left].toLowerCase() !== str[right].toLowerCase()) {
      return false;
    }
  }

  return true
}