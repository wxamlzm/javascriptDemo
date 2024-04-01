/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 首先我没有完全理解什么是最近公共祖先，主要体现在，看图能看懂，但没法用自己的语言描述出来
  if (root === null || root === p || root === q) return root
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)

  if (left === null && right === null) return null
  if (left === null) return right
  if (right === null) return left

  return root
}
