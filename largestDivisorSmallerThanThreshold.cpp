#include <bits/stdc++.h>
using namespace std;

int divideAndAdd(vector<int> &nums, double divisor)
{
  long long int sum = 0;
  for (size_t i = 0; i < nums.size(); i++)
  {
    sum += ceil(nums[i] / divisor);
  }
  return sum;
}

int smallestDivisor(vector<int> &nums, int threshold)
{
  long long int s = 1;
  long long int e = *max_element(nums.begin(), nums.end());

  while (s < e)
  {
    int m = s + (e - s) / 2;
    if (divideAndAdd(nums, m) > threshold)
    {
      s = m + 1;
    }
    else
    {
      e = m;
    }
  }
  return s;
}

int main()
{
  vector<int> vec = {21212, 10101, 12121};
  long long int threshold = 1000000;
  cout << smallestDivisor(vec, threshold) << endl;
  return 0;
}