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
    // 如果根节点为空，直接返回true
    if (!root) return true;

    // 辅助函数用于比较两个节点是否对称
    function isMirror(left, right) {
        // 如果两个节点都为空，对应对称
        if (!left && !right) return true;
        // 如果只有一个节点为空，不对称
        if (!left || !right) return false;
        // 如果两个节点的值不相等，不对称
        if (left.val !== right.val) return false;
        // 递归检查左节点的左子树和右节点的右子树，左节点的右子树和右节点的左子树
        return isMirror(left.left, right.right) && isMirror(left.right, right.left);
    }

    // 初始调用，从根节点的左右子节点开始比较
    return isMirror(root.left, root.right);
}

// 判断root的左右是否相等
// 逐层判断每一层的左右是否相等

// 递归？
