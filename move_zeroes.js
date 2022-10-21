var moveZeroes = function(nums) {
  let nxt = 0;
  for(let num of nums) {
      if(num !== 0) {
          nums[nxt] = num;
          nxt++;
      }
  }

  for(let i = nxt; i < nums.length; i++) {
    nums[i] = 0;
  }
};

const arr = [0,1,0,3,12];
moveZeroes(arr);

console.log(arr);
