/*
  Iterate and Select the smallest on each pass and swap it with current item
  start from j = i in inner loop as both outer and inner loop should start at same index per pass
*/

const selectionSort = (arr) => {
  let min;
  for(let ptr1 = 0; ptr1 < arr.length; ptr1++) {
    min = ptr1;
    for(let ptr2 = ptr1; ptr2 < arr.length; ptr2++) {
      if(arr[ptr2] < arr[min]) {
        min = ptr2;
      }
    }
    let temp = arr[ptr1];
    arr[ptr1] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

console.log(selectionSort([5, 4, 3, 2, 1, 0]));
