/*
  Smallest number larger than target in the given array.
  Problem can also be smallest number smaller than target in given array
  Problem also can be first letter which is lexicographically
  larger or smaller than target letter in letters array
*/
const print = console.log;

function search(arr, target) {
  let s = 0;
  let e = arr.length;
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

function ceiling(arr, target) {
  let index = search(arr, target + 1);
  let res = arr[0];
  if(index > arr.length - 1) {
    res = arr[0];
  } else if(arr[index] === target) {
    res = arr[(index + 1) % arr.length];
  } else if(arr[index] > target) {
    res = arr[index];
  }
  return res;
}

function floor(arr, target) {
  let index = search(arr, target);
  let n = arr.length;
  let res = arr[0];
  if(index > n - 1) {
    res = arr[0];
  } else if(arr[index] === target) {
    res = arr[Math.max((index - 1), 0)];
  }
  return res;
}


const arr1 = [2, 3, 5, 9, 14, 16, 18];
const target1 = 6;
print(ceiling(arr1, target1));

const arr2 = [1, 2, 2, 2, 4, 5, 6];
const target2 = 4;
print(ceiling(arr2, target2));

print(floor(arr2, 4));