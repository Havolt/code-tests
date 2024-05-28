/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

   if(nums.length < 2) {
      return;
   }

   for(let i = 2; i < nums.length; i++) {
      console.log(nums[i], nums[i-1], nums[i-2]);
   }
    console.log(nums);
};

removeDuplicates([1,1]);
removeDuplicates([1,1,1,2,2,3]);
removeDuplicates([0,0,1,1,1,1,2,3,3]);