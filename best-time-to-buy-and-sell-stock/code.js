/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   const pricesLength = prices.length;
   let largestDifference = 0;

   for(let i = 0; i < pricesLength-1; i++) {
      for(let j = i+1; j < pricesLength; j++) {
         if(prices[j] - prices[i] > largestDifference) {
            largestDifference = prices[j] - prices[i];
         }
      }  
   }

   console.log(largestDifference);
   return largestDifference;
};


maxProfit([7,1,5,3,6,4]);
maxProfit([7,6,4,3,1]);