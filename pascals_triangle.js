/*
Pascal;s Triangle
         1
        1 1
       1 2 1
      1 2 2 1
    1 2 3 3 2 1

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
*/

var generate = function (numRows) {
  let res = new Array(numRows);
  for (let i = 0; i < numRows; i++) {
    res[i] = new Array(i + 1);
    res[i][0] = 1;
    res[i][res[i].length - 1] = 1;

    for (let j = 1; j < i; j++) {
      res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
    }
  }
  return res;
};
