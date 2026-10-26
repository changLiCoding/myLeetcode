const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
const vowelSuffix = 'way';
const consonantSuffix = 'ay';

function converter(str: string): string {
  if (str === '') return ''
  const lower = str.toLowerCase()
  if (vowels.has(lower[0])) {
    return str + vowelSuffix
  }

  let firstVowelIndex = 0;

  while (firstVowelIndex < str.length && !vowels.has(lower[firstVowelIndex])) {
    if (lower[firstVowelIndex] === 'q' && lower[firstVowelIndex + 1] === 'u') {
      firstVowelIndex += 2
      continue;
    }

    if (lower[firstVowelIndex] === 'y' && firstVowelIndex !== 0) {
      break;
    }
    firstVowelIndex++
  }

  return str.slice(firstVowelIndex) + str.slice(0, firstVowelIndex) + consonantSuffix
}

function caseSensitive(origin: string, converted: string): string {
  if (origin === origin.toUpperCase()) {
    return converted.toUpperCase();
  }

  if (origin[0] === origin[0].toUpperCase()) {
    return converted[0].toUpperCase() + converted.slice(1)
  }
  
  return converted
}

function isLetter(char: string): boolean {
  const charCode = char.charCodeAt(0);
  return (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)
}

function pigLatin (str: string): string {
  let res = '';
  let i = 0
  while (i < str.length) {
    if (isLetter(str[i])) {
      let stop = i;
      while (stop < str.length && isLetter(str[stop])) {
        stop++
      }
      const origin = str.slice(i, stop);
      const converted = converter(origin);
      res += caseSensitive(origin, converted);
      i = stop
    } else {
      let stop = i;

      while (stop < str.length && !isLetter(str[stop])) {
        stop++
      }

      res += str.slice(i, stop)
      i = stop
    }
  }

  return res
}