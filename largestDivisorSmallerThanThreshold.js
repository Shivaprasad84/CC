const print = console.log;

function divideAndAdd(nums, divisor) {
  let sum = 0;
  for(let i = 0; i < nums.length; i++) {
      sum += Math.ceil(nums[i] / divisor);
  }
  return sum;
}

function smallestDivisor(nums, threshold) {
  let s = 1;
  let e = Math.max(...nums);

  while(s < e) {
    let m = s + Math.floor((e - s) / 2);
    if(divideAndAdd(nums, m) > threshold) {
      s = m + 1;
    } else {
      e = m;
    }
  }
  return s;
}

// const arr = [44,22,33,11,1];
const arr = [10101, 12121, 21212];
print(smallestDivisor(arr, 1000000));
