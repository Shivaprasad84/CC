function partition(arr, s, e) {
  let pivot = arr[e];
  let pIndex = s;
  for(let i = s; i < e; i++) {
    if(arr[i] <= pivot) {
      swap(arr, i, pIndex);
      pIndex++;
    }
  }
  swap(arr, e, pIndex);
  return pIndex;
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function quicksort(arr, s, e) {
  if(s >= e) {
    return;
  }

  let pivot = partition(arr, s, e);
  quicksort(arr, s, pivot - 1);
  quicksort(arr, pivot + 1, e);
}

function shuffle(arr) {
  // Fischer Yates Algorithm
  for(let i = arr.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i));
    swap(arr, i, randomIndex);
  }
}

function sort(arr) {
  shuffle(arr);
  quicksort(arr, 0, arr.length - 1);
}

const arr = [8, 1, 4, 7, 2, 4, 3, 0, 1, 3];
sort(arr);
console.log(arr);
