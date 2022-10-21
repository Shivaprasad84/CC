// Kadane's algo

function maxSubArraySum(arr) {
  currentSum = 0;
  maxSum = arr[0];
  for(let i = 0; i < arr.length; i++) {
    currentSum = Math.max(0, currentSum);
    currentSum += arr[i];
    maxSum = Math.max(currentSum, maxSum);
    // if(currentSum < 0) {
    //   currentSum = 0;
    // }
    // currentSum += arr[i];
    // maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
}

arr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
arr2 = [34, -50, 42, 14, -5, 86];
arr3 = [-5, -1, -8, -9];

console.log(maxSubArraySum(arr1));
console.log(maxSubArraySum(arr2));
console.log(maxSubArraySum(arr3));
