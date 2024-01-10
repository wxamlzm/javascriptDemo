// 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。

// 子数组是数组中元素的连续非空序列。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let count = 0
  for (let start = 0; start < nums.length; ++start) {
    let sum = 0
    for (let end = start; end >= 0; --end) {
      sum += nums[end]
      if (sum == k) {
        count++
      }
    }
  }
  return count
}
