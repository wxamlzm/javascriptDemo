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
    let sum = 0
    sum += nums[left]
    if (maxSum < sum) maxSum = sum

    for (let right = left + 1; right <= nums.length; right++) {
      sum += nums[right]
      if (maxSum < sum) maxSum = sum
    }
  }
  return maxSum
}
// 这是标准的穷举法
// 但很明显是有浪费的
// 我该怎么找到浪费的算力，并且把他优化呢

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// 找出最大数，然后根据最大数为中心进行双指针？ X
// 穷举法 √ 但是速度太慢
//

const res = maxSubArray(nums)
console.log(res)
