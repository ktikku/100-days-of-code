/**
94. Binary Tree Inorder Traversal

Given the root of a binary tree, return the inorder traversal of its nodes' values.

Example 1:
Input: root = [1,null,2,3]
Output: [1,3,2]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {Array} nodes
 * @return {number[]}
 */
var inorderTraversal = function (root, nodes) {
  nodes = nodes || [];
  if (root == null) {
    return nodes ? nodes : [];
  }
  inorderTraversal(root.left, nodes);
  nodes.push(root.val);
  inorderTraversal(root.right, nodes);
  return nodes;
};