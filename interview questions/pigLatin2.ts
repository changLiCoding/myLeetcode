const vowels2 = new Set(['a', 'e', 'i', 'o', 'u']);
const vowelSuffix2 = 'way';
const consonantSuffix2 = 'ay';

function converter2(str: string): string { 
  if (str === '') return ''

  const lower = str.toLowerCase();
  if (vowels2.has(lower[0])) return str + vowelSuffix2
  let pivot = 0

  while (pivot < str.length) {
    if (vowels2.has(lower[pivot])) break
    if (pivot !== 0 && lower[pivot] === 'y') break
    if (lower[pivot] === 'q' && lower[pivot + 1] === 'u') {
      pivot += 2;
      continue
    }
    pivot++
  }
  return str.slice(pivot) + str.slice(0, pivot) + consonantSuffix2
}

function matchCase(origin: string, converted: string): string {
  if (origin === origin.toUpperCase()) return converted.toUpperCase();
  if (origin[0] === origin[0].toUpperCase()) return converted[0].toUpperCase() + converted.slice(1).toLowerCase();
  return converted
}

function isLetter2(char: string) : boolean {
  const code = char.charCodeAt(0);

  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122)
}

function pigLatin2(str: string) : string {
  let res = '';
  let i = 0;

  while (i < str.length) {
    if (isLetter2(str[i])) {
      let stop = i;

      while (stop < str.length && isLetter2(str[stop])) {
        stop++
      }
      const orig = str.slice(i, stop);
      const converted = converter2(orig)
      const matchCaseWord = matchCase(orig, converted)
      res += matchCaseWord;
      i = stop;
    } else {

      let stop = i;

      while (stop < str.length && !isLetter2(str[stop])) {
        stop++
      }

      res += str.slice(i, stop);
      i = stop
    }
  }

  return res
}