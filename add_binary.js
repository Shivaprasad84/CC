var addBinary = function(a, b) {
  a.length > b.length ? (b = prefixZeroes(b, a.length - b.length)) : (a = prefixZeroes(a, b.length - a.length));
  let res = '';
  let sum = 0;
  let carry = 0;
  for(let i = a.length - 1; i >= 0; i--) {
    sum = 0;
    sum = +a[i] + +b[i] + carry;
    res = (sum % 2).toString() + res;
    carry = Math.floor(sum / 2);
  }
  if(carry === 1) {
    res = '1' + res;
  }
  return res;
}


const prefixZeroes = function(x, n) {
  for(let i = 0; i < n; i++) {
    x = '0' + x;
  }
  return x;
}

console.log(addBinary('10', '101'));
console.log(addBinary('11', '1')); // 11 + 01 ==>
console.log(addBinary('10011111', '11100'));

'1111'
'1111'
