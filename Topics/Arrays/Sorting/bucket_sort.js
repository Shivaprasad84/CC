/*
  useful when the array elements are in a small range and occurs multiple times
*/

const bucketSort = (arr) => {
  let hm = {};
  for(let num of arr) {
    if(!hm[num]) {
      hm[num] = 1;
    } else {
      hm[num]++;
    }
  }
  let index = 0;
  for(let key of Object.keys(hm)) {
    let k = hm[key];
    while(k-- !== 0) {
      arr[index++] = key;
    }
  }
  return arr;
}

console.log(bucketSort([0, 2, 0, 0, 1, 1, 0, 0, 0, 2, 2, 0, 2, 1, 1, 2, 0]));
