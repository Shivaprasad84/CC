const search = (array, target) => {
  let start = 0;
  let end = array.length;
  let mid;
  while (start < end) {
      mid = start + Math.floor((end - start) / 2);
      if(array[mid] < target) {
        start = mid + 1;
      } else {
        end = mid;
      }
  }
  return start;
}

const firstAndLastOccurrence = (array, target) => {
  return {first: search(array, target), last: search(array, target + 1) - 1};
}

const arr = [3, 4, 4, 4, 5, 5, 6, 7, 7, 8, 9];

console.log(firstAndLastOccurrence(arr, 4));
console.log(firstAndLastOccurrence(arr, 7));
