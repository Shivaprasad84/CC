/*
You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

Return a list of integers representing the size of these parts.

*/

var partitionLabels = function(s) {
  let hm = new Array(26).fill(0);

  for(let i = 0; i < s.length; i++) {
      hm[s[i].charCodeAt() - 'a'.charCodeAt()] = i;
  }

  let start = 0;
  let end = 0;
  let res = [];
  for(let i = 0;  i < s.length; i++) {
    end = Math.max(end, hm[s[i].charCodeAt() - 'a'.charCodeAt()]);

    if(i === end) {
      res.push(end - start + 1);
      start = end + 1;
    }
  }
  return res;
};

s = "ababcbacadefegdehijhklij";

console.log(partitionLabels(s));
