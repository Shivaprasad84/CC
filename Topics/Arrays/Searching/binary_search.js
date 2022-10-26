/*
  Search in a sorted array
  Complexity:
    Time: O(log(n))
    Space: O(1)
*/

const normal_binary_search = (array, target) => {
  let start = 0;
  let end = array.length - 1;
  let mid;

  while(start <= end) {
    mid = start + Math.floor((end - start) / 2);
    if(array[mid] === target) {
      return mid;
    }

    if(array[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

console.log(normal_binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(normal_binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9], 12));

// Leftmost binary search or bisect left
const leftmost_binary_search = (array, target) => {
  let start = 0;
  let end = array.length;
  let mid;
  while(start < end) {
    mid = start + Math.floor((end - start) / 2);
    if(array[mid] < target) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return start;
}

const arr = [3, 4, 4, 4, 5, 5, 6, 7, 7, 8, 9];
console.log(leftmost_binary_search(arr, 4)); // 1
console.log(normal_binary_search(arr, 4)); // 2

/*
  use normal binary search to return a boolean to say if element exists in array.
  user left most binary search to get the first/last occurrence or the index where the element is supposed to be. (insert index)
*/