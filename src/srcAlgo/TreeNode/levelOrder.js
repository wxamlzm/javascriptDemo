/*
 * @Author: zd
 * @Date: 2024-03-28 14:42:44
 * @LastEditors: zd
 * @LastEditTime: 2024-03-28 14:42:54
 * @Description: 
 */
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
var levelOrder = function (root) {
  // 初始化队列，加入根节点
  const queue = [root]
  // 初始化一个列表，用于保存遍历序列
  const list = []
  while (queue.length) {
    list.push([])
    for (let i = 1; i <= queue.length; i++) {
      let node = queue.shift() // 队列出队
      list[list.length - 1].push(node.val) // 保存节点值
      if (node.left) queue.push(node.left) // 左子节点入队
      if (node.right) queue.push(node.right) // 右子节点入队
    }
  }
  return list
}
