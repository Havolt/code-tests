/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
      if (nums.length === 0) return 0;
      let i = 1;
      while( i < nums.length) {
      if(nums[i] === nums[i-1]) {
         nums.splice(i, 1)
      } else {
         i++;
      }
    }
    return i;
};

const arrA = [1,1,2, 3, 3,  4, 4, 5, 5, 5, 7, 8, 8];

console.log(removeDuplicates(arrA));
console.log(arrA);