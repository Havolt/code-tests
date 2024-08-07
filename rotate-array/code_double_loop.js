/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

   k = k % nums.length;
   
   for(let j = 0; j < k; j++) {
      const lastItem = nums[nums.length-1];
      for(let i = nums.length-1; i > 0; i--) {
         nums[i] = nums[i-1];
      }
      nums[0] = lastItem;
   }
 
};

rotate([1,2,3,4,5,6,7], 3);

rotate([-1,-100,3,99], 2);
