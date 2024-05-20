/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
   console.log('start');

   if(n === 0) { return; }
   
   let nums1LastVal = m - 1;
   let nums2LastVal = n - 1;
   let mergedLastVal = m + n - 1;

   while(mergedLastVal >= 0) {
      if(nums1[nums1LastVal] >= nums2[nums2LastVal]) {
         nums1[mergedLastVal] = nums1[nums1LastVal];
         nums1LastVal--;
      } else if(nums2[nums2LastVal] !== undefined) {
         nums1[mergedLastVal] = nums2[nums2LastVal];
         nums2LastVal--;
      }
      mergedLastVal--;
   }

   console.log(nums1)
};

merge([1,2,3,0,0,0], 3, [2,5,6], 3);
merge([1], 1, [0], 0);
merge([0], 0, [1], 1);
merge([2,0], 1, [1], 1);
merge([-1,-1,0,0,0,0], 4, [-1,0], 2);
