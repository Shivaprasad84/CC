var intersection = function (nums1, nums2) {
  let hm = {};
  let res = {};
  for (let num of nums1) {
    hm[num] = true;
  }

  for(let num of nums2) {
    if(hm[num]) {
      res[num] = true;
    }
  }

  return Object.keys(res);
};

console.log(intersection([1,2,2,1], [2,2]));
