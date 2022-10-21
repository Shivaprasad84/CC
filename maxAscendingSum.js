function maxAscendingSum(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];
  for(let i = 1; i < nums.length; i++) {
      if(nums[i] > nums[i - 1]) {
          currentSum += nums[i];
      } else {
          currentSum = nums[i];
      }
      maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
}

console.log(maxAscendingSum([10,20,30,5,10,50]));
