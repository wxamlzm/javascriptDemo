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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  // 到底时跳出
  if (!root) return
  if (root.left === root.right) {
    isSymmetric(root.left)
    isSymmetric(root.right)
  }

  return true
}

// 判断root的左右是否相等
// 逐层判断每一层的左右是否相等

// 递归？
