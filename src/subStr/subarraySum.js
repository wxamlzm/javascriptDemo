// 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。

// 子数组是数组中元素的连续非空序列。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let left = 0

  const sumArray = []

  for (let right = 0; right < nums.length; right++) {
    if (left === right) {
      if (nums[left] === k) {
        sumArray.push([nums[left]])
      } else {
        left++
      }
    } else {
      let sum = nums.slice(left, right).reduce((pre, cur) => (pre += cur))
      if (sum === k) {
        sumArray.push(nums.slice(left, right))
      } else {
        left++
      }
    }
    right++
  }
  return sumArray.length
}
