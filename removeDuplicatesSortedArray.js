// var removeDuplicates = function(nums) {
//   for(let i = nums.length - 1; i >= 0; i--) {
//     if(i - 1 >= 0 && (nums[i] === nums[i - 1])) {
//       nums.splice(i, 1);
//     }
//   }
//   return nums.length;
// };

var removeDuplicates = function(nums){
  let slow = 0;
  
  for(let fast = 0; fast < nums.length; fast++){
      if(nums[fast] !== nums[fast - 1]){
          nums[slow] = nums[fast];
          slow++;
      }
  }

  return slow;
}
console.log(removeDuplicates([1,1,2]));
