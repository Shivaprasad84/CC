#include <bits/stdc++.h>
using namespace std;

int getPeak(vector<int>& nums) {
  int s = 0;
  int e = nums.size();
  while(s < e) {
    int m = s + (e - s) / 2;
    if(nums[m] > nums[m + 1]) {
      // at decreasing part of array
      e = m;
    } else {
      s = m + 1;
    }
  }
  return s;
}

int main() {
  vector<int> nums = {1, 2, 5, 6, 8, 9, 12, 24, 22, 19, 10, 5};
  cout << nums[getPeak(nums)] << endl;
  return 0;
}