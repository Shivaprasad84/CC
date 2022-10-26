const search_recursive = (arr, start, end, target) => {
  let mid = start + Math.floor((end - start) / 2);
  if(arr[mid] === target) {
    return mid;
  } else if(arr[mid] > target) {
    return search_recursive(arr, start, mid - 1, target);
  } else {
    return search_recursive(arr, mid + 1, end, target);
  }
}

const search = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  console.log(search_recursive(arr, start, end, target));
}

const arr = [2, 3, 5, 6, 8, 9, 11, 23, 23, 45, 66, 67, 89, 102];
const index = search(arr, 23);
console.log(index, arr[index]);
