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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  function recur (preStart, inStart, inEnd) {
    // 如果没有节点则返回null
    if (preStart > preorder.length - 1 || inStart > inEnd) {
      return null
    }

    // 选择前序遍历中的第一个节点作为当前子树的根节点
    const rootVal = preorder[preStart]
    const root = new TreeNode(rootVal)

    // 在中序遍历中的根节点，以划分左右子树
    const index = inorder.indexOf(rootVal, inStart)

    // 递归构建左子树
    root.left = recur(preStart + 1, inStart, index - 1)
    // 递归构建右子树
    root.right = recur(preStart + (index - inStart + 1), index + 1, inEnd)

    return root
  }

  // 调用递归函数，传入前序和中序遍历的起始和结束索引
  return recur(0, 0, inorder.length - 1)
}
