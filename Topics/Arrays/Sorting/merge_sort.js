const merge = (arr, temp, s, e) => {
  let m = s + Math.floor((e - s) / 2);
  let i = s;
  let j = m + 1;
  let k = i;
  while(i <= m && j <= e) {
    if(arr[i] < arr[j]) {
      temp[k++] = arr[i++];
    } else {
      temp[k++] = arr[j++];
    }
  }

  while(i <= m) {
    temp[k++] = arr[i++];
  }

  while(j <= e) {
    temp[k++] = arr[j++];
  }

  for(let i = s; i <= e; i++) {
    arr[i] = temp[i];
  }
}

const mergeSort = (arr, temp, s, e) => {
  if(s >= e) {
    return;
  }
  let m = s + Math.floor((e - s) / 2);
  mergeSort(arr, temp, s, m);
  mergeSort(arr, temp, m + 1, e);
  merge(arr, temp, s, e);
}

const sort = (arr) => {
  let temp = [];
  mergeSort(arr, temp, 0, arr.length - 1);
}

const arr = [5, 4, 3, 2, 1];
sort(arr);
console.log(arr);
