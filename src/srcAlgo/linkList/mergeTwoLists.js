const linkList = require('../../utils/linkList')
const SingleLinkNode = linkList.SingleLinkNode

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  console.log(list1.next)
}

const n0 = new SingleLinkNode(1)
const n1 = new SingleLinkNode(2)
const n2 = new SingleLinkNode(4)

n0.next = n1
n1.next = n2

let list1 = [1, 2, 4],
  list2 = [1, 3, 4]
mergeTwoLists(n0, list2)
