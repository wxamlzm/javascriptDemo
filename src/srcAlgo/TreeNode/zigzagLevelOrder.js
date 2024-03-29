// 给你二叉树的根节点 root ，返回其节点值的 锯齿形层序遍历 。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  // 当前思路是更新root的顺序，让排序更适应当前锯齿的排序思想

  // 重排root?
  // 将root重排后放入数组？
  // 重排必然要遍历，为什么不直接遍历得出结论？
  // 问题又回到了如何遍历的问题

  // 去空
  const list = []
  if (!root) return list

  const queue = [root]

  // 居然可以想到广度优先后进行排序的啊
  // 改变顺序不一定只盯着过程中的一环，整个过程中都是机会？
}
