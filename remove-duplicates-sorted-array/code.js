/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
      const existing = {}
      let i = 0;
      while( i < nums.length) {
      if(existing[nums[i]]) {
         console.log('match');
         nums.splice(i, 1)
      } else {
         existing[nums[i]] = true;
         i++;
      }
    }
    console.log(existing);
};

const arrA = [1,1,2, 3, 3,  4, 4, 5, 5, 5, 7, 8, 8];

console.log(removeDuplicates(arrA));
console.log(arrA);