function longestCommonPrefix(strs) {
  let res = '';

  for(let i = 0; i < strs[0].length; i++) {
    for(let j = 0; j < strs.length; j++) {
      if(i ===  strs[j].length || strs[j][i] !== strs[0][i]) {
        return res;
      }
    }
    res += strs[0][i];
  }
  return res;
}

console.log(longestCommonPrefix(['flawxt', 'flaw', 'flawir']));
