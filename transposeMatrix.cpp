#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> transpose(vector<vector<int>>& matrix) {
  long long n_rows = matrix.size();
  long long n_cols = matrix[0].size();
  vector<vector<int>> res(n_cols, vector<int>(n_rows));

  for(size_t i = 0; i < n_rows; i++) {
    for(size_t j = 0; j < n_cols; j++) {
      res[j][i] = matrix[i][j];
    }
  }
  return res;
}

void printMatrix(vector<vector<int>>&& matrix) {
  for(auto row : matrix) {
    for(int num : row) {
      cout << num << " ";
    }
    cout << endl;
  }
}

int main() {
  vector<vector<int>> matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
  };
  printMatrix(move(matrix));
  cout << "*****" << endl;
  printMatrix(transpose(matrix));
  return 0;
}