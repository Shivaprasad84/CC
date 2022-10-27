#include <bits/stdc++.h>
using namespace std;

int mySqrt(int x) {
  long long int s = 0;
  long long int e = x;
  while(s < e) {
      long long int m = s + (e - s) / 2;
      if(m * m < x) {
          s = m + 1;
      } else {
          e = m;
      }
  }
  return (s * s > x) ? s - 1 : s;
}

int main() {
    cout << "mySqrt(4) " << mySqrt(4) << "\n";
    cout << "mySqrt(25) " << mySqrt(25) << "\n";
    cout << "mySqrt(9) " << mySqrt(9) << "\n";
    cout << "mySqrt(36) " << mySqrt(36) << "\n";
    cout << "mySqrt(81) " << mySqrt(81) << "\n";
    cout << "mySqrt(100) " << mySqrt(100) << "\n";
    cout << "mySqrt(22) " << mySqrt(22) << "\n";
    cout << "mySqrt(2323135) " << mySqrt(2323135) << "\n";
    cout << "mySqrt(2147395599) " << mySqrt(2147395599) << "\n";
    return 0;
}
