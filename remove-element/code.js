/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
    // let counter = 0;
    // for(let i = 0; i < nums.length; i++) {
    //   if(nums[i] === val) {
    //      nums[i] = null;
    //      counter++;
    //   }
    // }
    // nums.sort();
    // return nums.length-counter;

    // let replacePosition = 0;
    // let counter = 0;

    // const swapAndMove = (currentPosition) => {
    //   if(replacePosition < currentPosition) {
    //     if(nums[replacePosition] === val) {
    //       nums[replacePosition] = nums[currentPosition];
    //       nums[currentPosition] = 'chomp';
    //       counter++;
    //     } else {
    //       replacePosition++;
    //       counter++;
    //       swapAndMove(currentPosition);
    //     }
    //   }
    // }

   

    // for(let i = nums.length-1; i >= replacePosition; i--) {
    //   console.log(i);
    //   if(nums[i] !== val) {
    //     swapAndMove(i);
    //   } else {
    //     nums[i] = 'chomp';
    //   }
    // }

    let j = 0;

    for(let i = 0; i < nums.length; i++) {
      if(nums[i] === val) {
        nums[i] = 'chomp';
      } else if (i !== j) {
        nums[j] = nums[i];
        j++;
        nums[i] = 'chomp';
      } else {
        j++;
      }
    }

    console.log(nums);
    console.log(j);
    
};

// console.log(removeElement([3,2,2,3], 3));
console.log(removeElement([0,1,2,2,3,0,4,2], 2));