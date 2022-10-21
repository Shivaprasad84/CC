var merge = function (nums1, m, nums2, n) {
  let ptr1 = 0;
  let ptr2 = 0;
  let res = [];
  while (ptr1 < m && ptr2 < n) {
    if (nums1[ptr1] <= nums2[ptr2]) {
      res.push(nums1[ptr1]);
      ptr1++;
    }

    if (nums1[ptr1] > nums2[ptr2]) {
      res.push(nums2[ptr2]);
      ptr2++;
    }
  }

  while (ptr1 < m) {
    res.push(nums1[ptr1]);
    ptr1++;
  }

  while (ptr2 < n) {
    res.push(nums2[ptr2]);
    ptr2++;
  }
  return res;
};

nums1 = [1,2,3,0,0,0];
m = 3;
nums2 = [2,5,6];
n = 3;
console.log(merge(nums1, m, nums2, n));