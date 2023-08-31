function sumFrom(i, j, prefixSumArray) {
  return (i !== 0) ? prefixSumArray[j] - prefixSumArray[i - 1] : prefixSumArray[j];
}

function buildPrefixArray(arr) {
  const prefixArray = [];
  let curSum = 0;
  for(let i = 0; i < arr.length; i++) {
    curSum += arr[i];
    prefixArray.push(curSum);
  }
  return prefixArray;
}

function rangeSum(arr, queries) {
  let pa = buildPrefixArray(arr);
  for(let query of queries) {
    const [i, j] = [...query];
    console.log(sumFrom(i, j, pa));
  }
}

const arr = [5, 8, 10, 14, 15, 23, 29, 39];
const queries = [
  [0, 0],
  [0, 1],
  [0, arr.length - 1],
  [2, 5],
  [1, 6],
  [4, arr.length - 2],
  [0, 2]
];
rangeSum(arr, queries);
