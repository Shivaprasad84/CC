function removeElement(nums, val) {
  let ptr1 = 0;
  for(let i = 0; i  < nums.length; i++) {
    if(nums[i] !== val) {
      nums[ptr1] = nums[i];
      ptr1++;
    }
  }
  return ptr1;
}

let arr = [3, 2, 2, 3];
const count = removeElement(arr, 3);
console.log(count);
console.log(arr);
