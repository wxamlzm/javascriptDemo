// 给你一个整数数组 nums ，
// 请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 子数组是数组中的一个连续部分。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = -Infinity
  for (let left = 0; left < nums.length; left++) {
    for (let right = left + 1; right <= nums.length; right++) {
      subNums = nums.slice(left, right)
      subNumsSum = subNums.reduce((pre, cur) => (pre += cur))
      if (maxSum < subNumsSum) {
        maxSum = subNumsSum
      }
    }
  }
  return maxSum
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

maxSubArray(nums)
