const vowels3 = new Set(['a', 'e', 'i', 'o', 'u'])
const vowelSuffix3 = 'way';
const consonantSuffix3 = 'ay';
function converter3 (str: string): string {
  const lower = str.toLowerCase();
  if (vowels3.has(lower[0])) return caseMathch(str, str + vowelSuffix3);
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

  return caseMathch(str, str.slice(i) + str.slice(0, i) + consonantSuffix3)
}

function caseMathch (origin: string, converted: string): string {
  if (origin === origin.toUpperCase()) return converted.toUpperCase();
  if (origin[0] === origin[0].toUpperCase()) return converted[0].toUpperCase() + converted.slice(1).toLowerCase();

  return converted
}

function isLetter3 (char: string): boolean {
  const code = char.charCodeAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122)
}

function pigLatin3 (str: string): string {


  return ''
}