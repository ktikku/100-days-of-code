/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let zero = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      swap(nums, i, zero);
      zero++;
    }
  }
};

var swap = function (nums, a, b) {
  const tmp = nums[a];
  nums[a] = nums[b];
  nums[b] = tmp;
}