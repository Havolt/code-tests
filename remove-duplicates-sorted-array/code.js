/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
      const existing = {}
    for(let i = 0; i < nums.length; i++) {
      if(existing[nums[i]]) {
         console.log('match');
      } else {
         existing[nums[i]] = true;
      }
    }
    console.log(existing);
};

const arrA = [1,1,2];

console.log(removeDuplicates(arrA));
console.log(arrA);