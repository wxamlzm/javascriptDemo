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
  // 是否平衡？
  // 中任意节点的左子树和右子树的高度之差的绝对值不超过 1 。

  return getDis(root, 0)
}

function getDis (node, dis = 0) {
  // 每一层进行距离累加，到底后，返回总距离，最后左右相减，取绝对值

  // 需要获取每一层node的层级
  if (node.left) getDis(node.left, ++dis)
  if (node.right) getDis(node.right, ++dis)

  return dis
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
