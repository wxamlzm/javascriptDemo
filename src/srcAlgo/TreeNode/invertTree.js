// 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。

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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  //
  if (!root) return root

  if (root.left) invertTree(root.left)
  if (root.right) invertTree(root.right)

  const left = root.left
  const right = root.right
  root.left = right
  root.right = left

  return root
}

const t0 = new TreeNode(4)
const t1 = new TreeNode(2)
const t2 = new TreeNode(7)
const t3 = new TreeNode(1)
const t4 = new TreeNode(3)
const t5 = new TreeNode(6)
const t6 = new TreeNode(9)

t0.left = t1
t0.right = t2
t1.left = t3
t1.right = t4
t2.left = t5
t2.right = t6

const res = invertTree(t0)
console.log(res)
