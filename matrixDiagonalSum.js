function diagonalSum(mat) {
  if(mat.length === 0) {
    return 0;
  }
  let sum = 0;
  let n = mat.length;
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < mat[0].length; j++) {
        if(i === j) {
            sum += mat[i][j];
        } else if(j === n - 1 - i) {
            sum += mat[i][j];
        }
    }
  }

  return sum;
}

const print = console.log;

const mat_1 = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1]
];

const mat_2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

print(diagonalSum(mat_1)) // 8
print(diagonalSum(mat_2)) // 25
