/*
 Complexity:
  Time: O(n^2)
  Space: O(1)
*/

const sort = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i; j < arr.length; j++) {
      if(arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

const arr = [3, 2, 5, 8, 4, 5, 1, 0, -1, 2];
console.log(sort(arr));
