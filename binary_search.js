/*
  binary search and search insert position
*/

function binarySearch(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let mid;
  let res = -1;

  while (start <= end) {
    mid = Math.ceil(start + (end - start) / 2);
    if (nums[mid] < target) {
      start = mid + 1;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      res = mid;
      break;
    }
  }
  console.log(start, end);
  if(start >= end && res === -1) {
    res = start;
  }
  return res;
}

console.log(binarySearch([1, 3, 5, 6, 9], 7));
// console.log(binarySearch([3, 4, 5, 9], 9));
