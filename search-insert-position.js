/**
35. Search Insert Position

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.

 Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var findElement = function (nums, target) {
  const length = nums.length;
  const mid = length % 2 === 0 ? (length / 2) - 1 : Math.floor(length / 2);
  if (length === 1 || nums[mid] === target) {
    return nums[mid];
  }
  return nums[mid] > target ? findElement(nums.slice(0, mid + 1), target) : findElement(nums.slice(mid + 1, length), target);
};

var searchInsert = function (nums, target) {
  const element = findElement(nums, target);
  console.log(element)
  if (element === target) {
    return nums.indexOf(target);
  }
  else if (element > target) {
    return nums.indexOf(element);
  }
  else if (element < target) {
    return nums.indexOf(element) + 1;
  }
}