/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
   let candidate = null;
   let counter = 0;

    nums.map(num => {
      if(counter === 0) {
         candidate = num;
         counter++;
      } else if(num !== candidate) {
         counter--;
      } else if ( num === candidate) {
         counter++;
      }
    })

    return candidate;
};

console.log(majorityElement([2,2,1,1,1,2,2,1,1]));