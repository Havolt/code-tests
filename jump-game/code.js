/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
   let position = 0;
   let jumpDistance = nums[0];
    
   // We look over the elements we can jump to.
   // Get the maximum distance we can travel from there
   // Then repeat

   const getMaxDistance = (jumpDistance) => {
      let largestPossibleJump = 0;
      
      console.log(jumpDistance)

      for(let i = position+1; i <= jumpDistance; i++) {
         const positionBonus = i - position;
         const fullJump = positionBonus + nums[i];
         if(fullJump > largestPossibleJump) {
            largestPossibleJump = fullJump;
         }
         console.log({largestPossibleJump})
         console.log({positionBonus})
      }

      if(position + largestPossibleJump > nums.length) {
         console.log(true)
      }
   }

   getMaxDistance(nums[0]);
};

canJump([2,3,1,1,4])
canJump([3,2,1,0,4])
canJump([3,3,1,5,2,8,0]);