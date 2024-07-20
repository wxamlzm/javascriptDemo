// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

// 子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // 建立数组缓存所有子序列
  const sequences = nums.map(() => [])
  // 初始化
  let maxLen = 1

  // 遍历 穷举节点
  for (let i = 0; i < nums.length; i++) {
    // 初始化数组
    sequences[i].push(nums[i])
    // 遍历所有i之前的子数组
    for (let j = 0; j < i; j++) {
      // 判断递增
      if (nums[i] > nums[j] && sequences[j].length + 1 > sequences[i].length) {
        sequences[i] = [...sequences[j], nums[i]]
      }
    }
    maxLen = Math.max(maxLen, sequences[i].length)
  }
  return maxLen
}

// 空间优化
var lengthOfLIS = function (nums) {
  if (nums.length === 0) return 0
  const dp = new Array(nums.length).fill(1)

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    maxLen = Math.max(maxLen, dp[i])
  }

  return maxLen
}
const nums = [0, 1, 0, 3, 2, 3]

const res = lengthOfLIS(nums)
console.log(res)
