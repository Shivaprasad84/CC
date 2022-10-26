/*
  res = low + ((high - low) / (arr[high] - arr[low])) * (high - low)
*/

const search = (array, target) => {
  let low = 0;
  let high = array.length - 1;
  return low + ((target - array[low]) / (array[high] - array[low])) * (high - low);
}

const target = 9;
const arr = [1, 3, 5, 7, 9, 11, 13];
const index = search(arr, target);
console.log(index);
