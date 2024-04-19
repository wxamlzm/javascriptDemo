// 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

// 叶子节点 是指没有子节点的节点。

const { TreeNode } = require('../../utils/treeNode')

const n0 = new TreeNode(5)
const n1 = new TreeNode(4)
const n2 = new TreeNode(8)
const n3 = new TreeNode(11)
const n4 = new TreeNode(13)
const n5 = new TreeNode(4)
const n6 = new TreeNode(7)
const n7 = new TreeNode(2)
const n8 = new TreeNode(5)
const n9 = new TreeNode(1)

n0.left = n1
n0.right = n2
n1.left = n3
n2.left = n4
n2.right = n5
n3.left = n6
n3.right = n7
n5.left = n8
n5.right = n9

var pathSum = function (root, targetSum) {
  const res = []
  const path = []
  let sum = 0

  const getSumArray = (root, targetSum) => {
    if (!root) {
      return
    }
    path.push(root.val)
    sum += root.val

    if (sum === targetSum && !root.left && !root.right) {
      // 记录解
      res.push([...path])
    }

    getSumArray(root.left, targetSum)
    getSumArray(root.right, targetSum)

    path.pop()
    sum -= root.val // 从 sum 中减去当前节点的值
  }

  getSumArray(root, targetSum)
  return res
}

const root = n0
const targetSum = 22
