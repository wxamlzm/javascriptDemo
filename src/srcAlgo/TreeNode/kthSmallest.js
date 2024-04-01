// 给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 个最小元素（从 1 开始计数）。

const { TreeNode } = require('../../utils/treeNode')

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  // res的全局概念
  let res
  // 递归的理解
  function dfs (node) {
    if (!node) return

    dfs(node.left)

    if (k === 0) return

    k--

    if (k === 0) {
      res = node.val

      return
    }

    dfs(node.right)
  }

  dfs(root)

  return res !== undefined ? res : null // 返回找到的值或null（如果没有找到）
}

// root = [5,3,6,2,4,null,null,1], k = 3

const t0 = new TreeNode(5)
const t1 = new TreeNode(3)
const t2 = new TreeNode(6)
const t3 = new TreeNode(2)
const t4 = new TreeNode(4)
const t5 = new TreeNode(1)

t0.left = t1
t0.right = t2
t1.left = t3
t1.right = t4
t3.left = t5

const res = kthSmallest(t0, 3)
console.log(res)
