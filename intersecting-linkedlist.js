/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  const visted = new Set();
  while (headA) {
    visted.add(headA);
    headA = headA.next;
  }
  while (headB) {
    if (visted.has(headB)) {
      return headB;
    }
    headB = headB.next;
  }
  return null;
};