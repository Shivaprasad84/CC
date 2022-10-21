var isPalindrome = function(s) {
  let str = removeAlphaNum(s);
  for(let i = 0, j = str.length - 1; i <= j; i++, j--) {
    if(str[i] !== str[j]) {
      console.log(i, j, str[i], str[j])
      return false;
    }
  }
  return true;
};

const removeAlphaNum = (s) => {
  let lower = s.toLowerCase();
  let str = '';

  let a = 'a'.charCodeAt();
  let zero = '0'.charCodeAt();
  for(let ch of lower) {
      let x = ch.charCodeAt();
      if((x - a >= 0 && x - a <= 25) || (x - zero >= 0 && x - zero <= 9)) {
        str += ch;
      }
  }
  return str;
}

console.log(isPalindrome('A man, a plan, a canal: Panama'));
// console.log(isPalindrome('raccar'));
