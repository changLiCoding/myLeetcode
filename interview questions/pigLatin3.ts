const vowels3 = new Set(['a', 'e', 'i', 'o', 'u'])
const vowelSuffix3 = 'way';
const consonantSuffix3 = 'ay';
function converter3 (str: string): string {
  const lower = str.toLowerCase();
  if (vowels3.has(lower[0])) return caseMatch(str, str + vowelSuffix3);
  let i = 0;
  
  while (i < str.length) {
    if (lower[i] === 'y' && i !== 0) {
      break
    }

    if (lower[i] === 'q' && lower[i + 1] === 'u') {
      i += 2
      continue
    }

    if (vowels3.has(lower[i])) {
      break
    }

    i++
  }

  return caseMatch(str, str.slice(i) + str.slice(0, i) + consonantSuffix3)
}

function caseMatch (origin: string, converted: string): string {
  if (origin === origin.toUpperCase()) return converted.toUpperCase();
  if (origin[0] === origin[0].toUpperCase()) return converted[0].toUpperCase() + converted.slice(1).toLowerCase();

  return converted
}

function isLetter3 (char: string): boolean {
  const code = char.charCodeAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122)
}

function pigLatin3 (str: string): string {
  let res = ''
  let start = 0;
  while (start < str.length) {
    if(isLetter3(str[start])) {
      let stop = start + 1;

      while (stop < str.length && isLetter3(str[stop])) {
        stop++
      }
      res += converter3(str.slice(start, stop));
      start = stop
    } else {
      let stop = start + 1;

      while (stop < str.length && !isLetter3(str[stop])) {
        stop++
      }

      res += str.slice(start, stop);
      start = stop
    }
  }

  return res
}