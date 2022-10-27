function findPeakElement(nums) {
  let s = 0;
  let e = nums.length;
  if(nums.length == 1) {
      return 0;
  }
  while(s < e) {
    let m = s + Math.floor((e - s) / 2);
    if(m + 1 > nums.length - 1 || nums[m] > nums[m + 1]) {
      // at decreasing part of array
      e = m;
    } else {
      s = m + 1;
    }
  }
  return s;
}

const print = console.log;

const arr = [1,2,1,3,5,6,4]
print("index =", findPeakElement(arr), "element =", arr[5]);
