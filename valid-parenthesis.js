/* 
20. Valid Parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Input: s = "()"
Output: true
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        console.log(i)
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
        }

        else if ((s[i] === ')' && stack[stack.length - 1] === '(') || (s[i] === '}' && stack[stack.length - 1] === '{') || (s[i] === ']' && stack[stack.length - 1] === '[')) {
            stack.pop();
        }
        else return false;
    }
    if (stack.length === 0) {
        return true
    }
    return false;
};