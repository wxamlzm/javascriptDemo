// 给你二叉树的根节点 root ，返回其节点值的 锯齿形层序遍历 。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

// 思路过程
// 当前思路是更新root的顺序，让排序更适应当前锯齿的排序思想
// 重排root?
// 将root重排后放入数组？
// 重排必然要遍历，为什么不直接遍历得出结论？
// 问题又回到了如何遍历的问题
// 去空
// 居然可以想到广度优先后进行排序的啊
// 改变顺序不一定只盯着过程中的一环，整个过程中都是机会？
const { TreeNode } = require('../../utils/treeNode')

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  const list = []
  if (!root) return list

  const queue = [root]

  let count = 1
  while (queue.length) {
    const currentLevelSize = queue.length
    list.push([])
    for (let i = 1; i <= currentLevelSize; i++) {
      let node = queue.shift() // 队列出队
      if (count % 2 === 0) {
        list[list.length - 1].unshift(node.val)
      } else {
        list[list.length - 1].push(node.val)
      }
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    count++
  }
  return list
}

const t0 = new TreeNode(3)
const t1 = new TreeNode(9)
const t2 = new TreeNode(20)
const t3 = new TreeNode(15)
const t4 = new TreeNode(7)

t0.left = t1
t0.right = t2
t2.left = t3
t2.right = t4

const res = zigzagLevelOrder(t0)
console.log(res)
