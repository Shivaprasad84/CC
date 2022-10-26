/*
Input: nums = [1, 2, 0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.

Input: nums = [-5]
Output: 1

Input: nums = [2, 3, 4]
Output: 1
*/

// function findMissingPositive(nums) {
//   const hm = {};
//   let min = Infinity;
//   let res = -1;
//   let posCntr = 0;
//   let negCntr = 0;
//   for(let i of nums) {
//     if(!hm[i]) {
//       hm[i] = 0;
//     }
//     hm[i]++;
//   }

//   for(let i = 0; i < nums.length; i++) {
//     if(nums[i] > 1) {
//       posCntr++;
//     }
//     if(nums[i] < 1) {
//       negCntr++;
//     }
//     if(nums[i] >= 0 && nums[i] < min && !hm[nums[i] + 1]) {
//       min = nums[i];
//       res = nums[i] + 1;
//     }
//   }
//   if(posCntr === nums.length || negCntr === nums.length || posCntr + negCntr === nums.length) {
//     res = 1;
//   }
//   return res;
// }

// function findMissingPositive(nums) {
//   const arr = [];
//   for(let num of nums) {
//     arr[num] = 1;
//   }
//   let i = 1;
//   while(true) {
//       if(!arr[i]) {
//         return i;
//       }
//       i++;
//   }
// }

function findMissingPositive(nums) {
  const N = nums.length;
  let curr, next;
  for(let i = 0; i < N; i++) {
      curr = nums[i];
      while(curr - 1 >= 0 && curr - 1 < N) {
          next = nums[curr - 1];
          if(curr != next) {
              nums[curr - 1] = curr;
              curr = next;
          } else {
              break;
          }
      }
  }

  for(let i = 0; i < N; i++) {
      if(nums[i] != i + 1) {
          return i + 1;
      }
  }
  return N + 1;
}

const nums = [3,4,-1,1];
console.log(findMissingPositive(nums));
