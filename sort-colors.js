/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function (nums) {
  let zero = 0;
  let one = 0;
  let two = nums.length - 1;

  while (one <= two) {
    console.log(one, zero, two)
    if (nums[one] === 0) {
      swap(nums, zero, one)
      zero++;
      one++;
      continue;
    }
    if (nums[one] === 1) {
      one++;
      continue;
    }
    if (nums[one] === 2) {
      swap(nums, one, two)
      two--;
      continue;
    }
  }
  return nums;
};

var swap = function (nums, i, j) {
  var tmp = nums[j];
  nums[j] = nums[i];
  nums[i] = tmp;
}
