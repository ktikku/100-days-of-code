/**
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
 */

/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function (n, memo) {
  memo = memo || {};
  if (memo[n]) {
    return memo[n];
  }
  if (n <= 1) {
    return 1;
  }
  else {
    return memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  }
};