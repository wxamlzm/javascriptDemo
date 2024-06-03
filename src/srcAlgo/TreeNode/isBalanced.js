/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const { TreeNode } = require('../../utils/treeNode')

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  function checkBalance (node) {
    // 为空则为平衡
    if (!node) return [true, 0]

    // 检查左子树
    const [isLeftBalance, leftDepth] = checkBalance(node.left)
    if (isLeftBalance === false) return [false, 0]

    // 检查右子树
    const [isRightBalance, rightDepth] = checkBalance(node.right)
    if (isRightBalance === false) return [false, 0]

    // 判断当前节点是否平衡
    const isNodeBalance = Math.abs(leftDepth - rightDepth) <= 1

    return [isNodeBalance, Math.max(leftDepth, rightDepth) + 1]
  }

  return checkBalance(root)[0]
}

const t0 = new TreeNode(3)
const t1 = new TreeNode(9)
const t2 = new TreeNode(20)
const t3 = new TreeNode(15)
const t4 = new TreeNode(7)

t0.left = t1
t0.right = t2
t1.left = t3
t1.right = t4

const res = isBalanced(t0)
console.log(res)
