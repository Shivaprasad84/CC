const search = (arr, target) => {
  if(arr[0] === target) return 0;

  let n = arr.length;
  let i = 1;

  while(i < n && arr[i] < target) {
    i *= 2;
  }

  let start = i / 2;
  let end = Math.min(i, n - 1);
  let mid;

  while(start < end) {
    mid = start + Math.floor((end - start) / 2);
    if(arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
}

const arr = [2, 3, 5, 6, 8, 9, 11, 23, 23, 45, 66, 67, 89, 102];
const index = search(arr, 23);
console.log(index, arr[index]);
