function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  hm1 = {}
  hm2 = {}

  for(let i = 0; i < s.length; i++) {
    if(hm1[s[i]] === undefined) {
      hm1[s[i]] = 0;
    }
    if(hm2[t[i]] === undefined) {
      hm2[t[i]] = 0;
    }
    hm1[s[i]]++;
    hm2[t[i]]++;
  }

  for(let key of Object.keys(hm1)) {
    if(hm2[key] !== hm1[key]) {
      return false;
    }
  }
  return true;
}

s = 'anagram';
t = 'gramana';

console.log(isAnagram(s, t));
console.log(isAnagram('rat', 'car'));
console.log(isAnagram('abcdefg', 'debcgfa'));
