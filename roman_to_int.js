let hm = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}

function romanToInt(s) {
  let sum = 0;
  let prev;
  for(let i = s.length - 1; i >= 0; i--) {
    if(
      (s[i] === 'I' && (prev === 'V' || prev === 'X')) ||
      (s[i] === 'X' && (prev === 'L' || prev === 'C')) ||
      (s[i] === 'C' && (prev === 'D' || prev === 'M') )
    ) {
      sum -= hm[s[i]];
    } else {
      sum += hm[s[i]];
    }
    prev = s[i];
  }
  return sum; // En1gma42$
}

console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
console.log(romanToInt('CMXCIX'));
console.log(romanToInt('IM'));
