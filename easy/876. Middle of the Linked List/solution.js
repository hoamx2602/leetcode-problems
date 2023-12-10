/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let firstPoint = head;
  let secondPoint = head;
  while (secondPoint && secondPoint.next) {
    firstPoint = firstPoint.next;
    secondPoint = secondPoint.next.next;
  }
  return firstPoint;
};

// Time Complexity = O(n)
// Space Complexity = O(1)
