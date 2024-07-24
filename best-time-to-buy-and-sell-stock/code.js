/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   const pricesLength = prices.length;
   let largestDifference = 0;

   let minPrice;

   for(let i = 0; i < pricesLength; i++) {
      if(minPrice === undefined || prices[i] < minPrice) {
         minPrice = prices[i];
      } else if(prices[i] - minPrice > largestDifference) {
         largestDifference = prices[i] - minPrice;
      }
   }

   console.log(largestDifference);
   return largestDifference;
};


maxProfit([7,1,5,3,6,4]);

maxProfit([7,9,5,3,1,6]);

maxProfit([7,6,4,3,1]);