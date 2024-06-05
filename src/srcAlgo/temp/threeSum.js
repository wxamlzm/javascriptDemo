// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请

// 你返回所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b)

  let res = []
  let k = 0

  for (k = 0; k < nums.length - 2; k++) {
    if (nums[k] > 0) break

    if (k > 0 && nums[k] === nums[k - 1]) continue // 题设不让重复

    let i = k + 1
    let j = nums.length - 1

    while (i < j) {
      let s = nums[k] + nums[i] + nums[j]
      if (s < 0) {
        i++
        while (i < j && nums[i] === nums[i - 1]) i++ //跳过重复的nums[i]
      } else if (s > 0) {
        j--
        while (i < j && nums[j] === nums[j + 1]) j-- //跳过重复的nums[j]
      } else {
        res.push([nums[k], nums[i], nums[j]])
        i++
        j--
        while (i < j && nums[i] === nums[i - 1]) i++
        while (i < j && nums[j] === nums[j + 1]) j--
      }
    }
  }
  return res
}

const nums = [-1, 0, 1, 2, -1, -4]
const res = threeSum(nums)
console.log(res)
