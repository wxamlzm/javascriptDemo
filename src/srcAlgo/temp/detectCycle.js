/*
 * @Author: zd
 * @Date: 2024-03-20 10:35:46
 * @LastEditors: zd
 * @LastEditTime: 2024-03-20 13:41:47
 * @Description:
 */
const linkList = require('../../utils/linkList')
const SingleLinkNode = linkList.SingleLinkNode

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let slow = head
  let fast = head
  while (fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
    // 相等节点不一定是环形节点
    if (slow === fast) {
      return slow
    }
  }
  return null
}
