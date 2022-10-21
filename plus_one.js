function plusOne(arr) {
  for(let i = arr.length - 1; i >= 0; i--) {
    if(arr[i] < 9) {
      arr[i] += 1;
      return arr;
    }
    arr[i] = 0;
  }
  arr.push(0);
  arr[0] = 1;
  return arr;
}

console.log(plusOne([1,2,3]));
console.log(plusOne([9]));
console.log(plusOne([9,9,9]));

