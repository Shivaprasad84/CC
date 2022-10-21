var mySqrt = function (x) {
  let res = 0;
  while(res <= x) {
    if(res * res === x) return res;

    if(res * res > x) return res - 1;
    res++;
  }
};

console.log(mySqrt(2147395599));
