/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

  - Open brackets must be closed by the same type of brackets.
  - Open brackets must be closed in the correct order.
  - Every close bracket has a corresponding open bracket of the same type.
*/

function isValidParen(paren) {
  isValid = true;
  let hm = {
    '[': ']',
    '{': '}',
    '(': ')'
  }

  let stack = [];
  let numOpen = 0;
  let numClose = 0;
  for(let i = 0; i < paren.length; i++) {
    if(hm[paren[i]]) {
      numOpen += 1;
      stack.push(paren[i]);
    } else {
      numClose += 1;
      if(numOpen === 0) {
        return false;
      }
      if(hm[stack.pop()] !== paren[i]) {
        return false;
      }
    }
  }
  return numOpen === numClose;
}

console.log('true', isValidParen('([])'));
console.log('true', isValidParen('[{()}]'));
console.log('false', isValidParen('([]'));
console.log('false', isValidParen('([]}}}'));
console.log('true', isValidParen('(){}[]'));
