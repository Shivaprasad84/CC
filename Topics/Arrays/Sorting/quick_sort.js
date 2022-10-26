function quicksort(arr, start, end) {
  if(start >= end) {
    return;
  }
  const pivot = partition(arr, start, end);
  quicksort(arr, start, pivot - 1);
  quicksort(arr, pivot + 1, end);
}

function partition(arr, start, end) {
  let pivot = end;
  let pIndex = start;
  for(let i = start; i < end; i++) {
    if(arr[i] <= arr[pivot]) {
      swap(arr, i, pIndex);
      pIndex++;
    }
  }
  swap(arr, pIndex, end);
  return pIndex;
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
quicksort(arr, 0, arr.length - 1);

console.log(arr);
