/*
  - create an hash map {}
  - iterate through the array
  - for each element find the complement. target - arr[i]
  - check if the hm[arr[i]] already exists in the array
  - if it does not store the index as value with key as complement. hm[complement] = i.
    (expecting the complement to be another element in the array further along the line)
  - if it does exist the corresponding stored index and the current index will be the answer for two sum.

  - O(n) space and O(n) time
*/

function twoSum(arr, target) {
  hm = {}
  for(let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (hm[arr[i]]) {
      let index_1 = i;
      let index_2 = hm[arr[i]];
      console.log(i, hm[arr[i]]);
      console.log(`${arr[index_1]} + ${arr[index_2]} = ${arr[index_1] + arr[index_2]}`);
      return;
    } else {
      hm[complement] = i;
    }
  }
}

arr = [2, 1, 5, 3];
target = 8;

twoSum(arr, target);
// {
//   2: 0,
//   3: 1,
//   -1: 2,
//   1: 3
// }