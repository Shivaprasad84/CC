/*
  Number is majority if it appears more than n / 2 times in the given array where n is the size of the array.
*/

function search(arr, target) {
  let s = 0;
  let  e = arr.length;
  while(s < e) {
    let m = s + Math.floor((e - s) / 2);
    if(arr[m] < target) {
      s = m + 1;
    } else {
      e = m;
    }
  }
  return s;
}
const print = console.log;

function isMajority(arr, target) {
  let n = arr.length;
  let firstIndex = search(arr, target);
  if(arr[firstIndex] !== target) {
    return false;
  }
  let lastIndex = search(arr, target + 1) - 1;
  return (lastIndex - firstIndex + 1) > Math.floor(n / 2);
}


const a1 = [1, 2, 3, 3, 3, 3, 10];
const a2 = [1, 1, 2, 4, 4, 4, 6, 6];
const a3 = [1, 1, 1, 2, 2];

print(isMajority(a1, 3)); // true
print(isMajority(a2, 4)); // false
print(isMajority(a3, 1)); // true
