// 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。
// 题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。
// 请不要使用除法，且在 O(n) 时间复杂度内完成此题。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const len = nums.length

  if (len === 0) return []

  let ans = new Array(len).fill(1)

  // 计算左侧乘积数组

  for (let i = 1; i < len; i++) {
    ans[i] = ans[i - 1] * nums[i - 1]
  }

  let rightProduct = 1

  // 计算右侧乘积并更新左侧数组
  // 虽然是两次循环，但总量没超过n
  for (let i = len - 2; i >= 0; i--) {
    rightProduct *= nums[i + 1]

    ans[i] *= rightProduct
  }

  return ans
}

let nums = [-1, 1, 0, -3, 3]

productExceptSelf(nums)
