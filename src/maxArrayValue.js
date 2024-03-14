/*
 * @Author: zd
 * @Date: 2024-03-14 10:00:29
 * @LastEditors: zd
 * @LastEditTime: 2024-03-14 10:56:32
 * @Description:
 */
// 给你一个下标从 0 开始、由正整数组成的数组 nums 。

// 你可以在数组上执行下述操作 任意 次：

// 选中一个同时满足 0 <= i < nums.length - 1 和 nums[i] <= nums[i + 1] 的整数 i 。将元素 nums[i + 1] 替换为 nums[i] + nums[i + 1] ，并从数组中删除元素 nums[i] 。

// 返回你可以从最终数组中获得的 最大 元素的值。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxArrayValue = function (nums) {
  // 遍历数组，寻找挨着的 nums[i] < nums[i+1]的最大数？
  // 所以根据题意，只需要倒序遍历就能解决我纠结的怎么求当前最大的可合并元素的问题？
  const lastIndex = nums.length - 1
  let sum = nums[lastIndex]
  for (let i = lastIndex - 1; i >= 0; i--) {
    curNums = nums[i]
    if (sum >= curNums) {
      sum = sum + curNums
    } else {
      sum = curNums
    }
  }
  return sum
}

let nums = [2, 3, 7, 9, 3]
const res = maxArrayValue(nums)
console.log(res)
