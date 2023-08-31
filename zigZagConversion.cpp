#include <iostream>
#include <vector>
#include <string>

using namespace std;

int row_counter = 0;
int col_counter = 0;

string convert(string& s, int n) {
  string out = "";
  int cols = s.length();
  char arr[n][cols];
  for(int i = 0; i < n; i++) {
    for(int j = 0; j < cols; j++) {
      arr[i][j] = '_';
    }
  }
  int i = 0, r = 0, c = 0;
  while(i < s.length()) {
    while(r < n) {
      arr[r][c] = s[i];
      r++;
      i++;
    }
    r -= 2;
    c++;

    while(r > 0) {
      arr[r][c] = s[i];
      r--;
      c++;
      i++;
    }
  }

  for(int i = 0; i < n; i++) {
    for(int j = 0; j < cols; j++) {
      cout << arr[i][j] << " ";
      if(arr[i][j] != '_') {
        out += arr[i][j];
      }
    }
    cout << "\n";
  }
  return out;
}


int main() {
  string s = "PAYPALISHIRING";
  int n;
  cout << "Enter n: ";
  cin >> n;
  cout << convert(s, n) << "\n";
  // cout << convert(s, 4) << "\n";
  return 0;
}
