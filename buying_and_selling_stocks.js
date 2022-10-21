var maxProfit = function(prices) {
  let buy = Infinity;
  let profit = -Infinity;
  for(let i = 0; i < prices.length; i++) {
    if(prices[i] < buy) {
      buy = prices[i];
    }
    profit = Math.max(prices[i] - buy, profit);
  }
  return profit;
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([2,3,4,1]));
