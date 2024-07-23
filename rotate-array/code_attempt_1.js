/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
   const arrayLength = nums.length;
   const lastNumber = nums[nums.length-1];
   let pointer = nums.length - 1 - k;
   let counter = 0;


   while(counter < arrayLength) {
      overwriteIndex = pointer + k >= arrayLength ? (pointer + k) - (arrayLength)  : pointer + k;
      console.log(pointer + k);
      // console.log(pointer, (arrayLength) - (pointer + k))
      nums[overwriteIndex] = nums[pointer];
      counter++;
      pointer = pointer - k < 0 ? arrayLength + (pointer-k) : pointer -= k;
      // console.log(pointer + k, pointer - k );
      console.log(overwriteIndex, pointer, nums )
   }

   nums[k-1] = lastNumber;


   console.log(nums, pointer ,counter);
};

// rotate([1,2,3,4,5,6,7], 3);

rotate([-1,-100,3,99], 2);


// rotate([1,2,3,4,5,6,0], 3);

// const num = 7;