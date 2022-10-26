const insertionSort = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
    }
  }
  return arr;
}

console.log(insertionSort([5, 4, 3, 2, 1, 0]));
