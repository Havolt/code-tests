/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
   let position = 0;

   const getMaxDistance = (jumpDistance) => {
      let largestPossibleJump = 0;
      let largestJumpIndex;
      
      // console.log({jumpDistance})
      // console.log({position})

      for(let i = position+1; i <= position+jumpDistance; i++) {
         const positionBonus = i - position;
         const fullJump = positionBonus + nums[i];
         if(fullJump > largestPossibleJump) {
            largestPossibleJump = fullJump;
            largestJumpIndex = i;
         }
         // console.log({fullJump});
         // console.log({largestPossibleJump})
         // console.log({positionBonus})
         // console.log({largestJumpIndex})
      }


      if(!largestJumpIndex) {
         console.log({largestJumpIndex})
         console.log(false, '!largestJumpIndex');
         return;
      }

      if(position + largestPossibleJump >= nums.length-1) {
         console.log(true)
         return;
      }

      if(position === largestJumpIndex) {
         console.log(false, 'position === largestJumpIndex');
         return;
      }

      

      position = largestJumpIndex ;
      getMaxDistance(nums[position]);
   }

   getMaxDistance(nums[0]);
   console.log({position});
};

canJump([2,3,1,1,4])
canJump([3,2,1,0,4])
canJump([3,3,1,5,2,8,0]);
canJump([1,1,1,1,1,1,1,1,1,1,1,0]);