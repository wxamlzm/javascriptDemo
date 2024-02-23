// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
const ListNode = require('./LinkedListClass')

var reverseList = function (head) {
  let prev = null
  let curr = head
  while (curr) {
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev
}

const head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null))))
)
const res = reverseList(head)
console.log(res)
