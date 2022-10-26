#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    int search(vector<int> &nums, int target)
    {
        int s = 0;
        int e = nums.size();
        while (s < e)
        {
            int m = s + (e - s) / 2;
            if (nums[m] < target)
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

    vector<int> searchRange(vector<int> &nums, int target)
    {
        vector<int> res = {-1, -1};
        if (nums.size() == 0)
        {
            return res;
        }
        int firstIndex = search(nums, target);
        if (firstIndex > nums.size() - 1 || nums[firstIndex] != target)
        {
            return res;
        }
        else
        {
            res[0] = firstIndex;
        }

        int lastIndex = search(nums, target + 1);
        if (nums[lastIndex - 1] == target)
        {
            res[1] = lastIndex - 1;
        }
        return res;
    }
};

void print(vector<int>&& vec) {
    for(auto elem : vec) {
        cout << elem << " ";
    }
    cout << endl;
}

int main() {
    Solution* s = new Solution();
    vector<int> nums1 = {5,7,7,8,8,10};
    int target1 = 8;
    print(s->searchRange(nums1, target1)); // [3, 4]

    vector<int> nums2 = {5,7,7,8,8,10};
    int target2 = 6;
    print(s->searchRange(nums2, target2)); // [-1, -1]

    delete s;
    return 0;
}