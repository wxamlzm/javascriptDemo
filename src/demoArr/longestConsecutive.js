// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
// 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive (nums) {
  if (nums.length === 0) return 0

  let numSet = new Map() // 哈希表存储每个数字及其连续次数
  let maxLength = 0 // 结果变量

  for (let num of nums) {
    if (!numSet.has(num)) {
      // 如果这个数字还没出现过
      let left = numSet.get(num - 1) // 左边连续的长度
      let right = numSet.get(num + 1) // 右边连续的长度
      let currentLength = 1 + (left || 0) + (right || 0) // 当前连续序列的长度

      // 更新哈希表中当前数字以及左右两边连续数字的长度
      numSet.set(num, currentLength)
      if (left) numSet.set(num - left, currentLength)
      if (right) numSet.set(num + right, currentLength)

      maxLength = Math.max(maxLength, currentLength) // 更新最大长度
    }
  }

  return maxLength
}

const nums = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]
longestConsecutive(nums)
