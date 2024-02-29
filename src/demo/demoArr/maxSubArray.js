// 给你一个整数数组 nums ，
// 请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 子数组是数组中的一个连续部分。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = -Infinity
  let curSum = -Infinity

  for (let left = 0; left < nums.length; left++) {
    curSum = Math.max(nums[left], curSum + nums[left]) // 状态转移：取当前值与累计和中较大的一个作为新的累计和
    maxSum = Math.max(maxSum, curSum) // 比较当前最大子数组和与历史最大子数组和

    // 上述两行代码已经完成了求解过程，所以不需要内层循环
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
