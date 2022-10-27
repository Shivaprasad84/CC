const print = console.table;

function transpose(mat) {
  let n_rows = mat.length;
  let n_cols = mat[0].length;
  let t_mat = [];
  for(let i = 0; i < n_cols; i++) {
    t_mat.push([]);
  }

  for(let i = 0; i < n_rows; i++) {
    for(let j = 0; j < n_cols; j++) {
      t_mat[j][i] = mat[i][j];
    }
  }
  return t_mat;
}

const mat = [
  [1, 2, 3],
  [4, 5, 6]
];

const mat1 = [
  [1, 4],
  [2, 5],
  [3, 6]
];

print(transpose(mat));
print(transpose(mat1));

