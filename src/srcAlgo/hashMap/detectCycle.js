/*
 * @Author: zd
 * @Date: 2024-03-20 10:35:46
 * @LastEditors: zd
 * @LastEditTime: 2024-03-21 10:40:15
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
// var detectCycle = function (head) {
//   let slow = head
//   let fast = head
//   while (fast.next !== null) {
//     slow = slow.next
//     fast = fast.next.next
//     // 相等节点不一定是环形节点
//     if (slow === fast) {
//       return slow
//     }
//   }
//   return null
// }
// 这题本质是无法理解，如何通过快慢指针必然的相会来计算指定的节点的位置
// 原错解我只找到了第一次相会，并且没理解第一次相会是什么意义

var detectCycle = function (head) {
  const visited = new Set()
  while (head !== null) {
    if (visited.has(head)) {
      return head
    }
    visited.add(head)
    head = head.next
  }
  return null
}
