// 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
// 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  nums.sort((a, b) => a - b)
  let firstMissingPositive

  if (nums[0] > 1) return 1

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] > 1) {
      if (nums[i] - 1 > 0) {
        if (nums[i - 1] < 0) {
          firstMissingPositive = 1
        } else {
          firstMissingPositive = Math.min(nums[i - 1] + 1, nums[i] - 1)
        }
        break
      }
    }
  }

  if (firstMissingPositive) {
    return firstMissingPositive
  } else {
    if (nums[nums.length - 1] + 1 > 0) {
      return nums[nums.length - 1] + 1
    } else {
      return 1
    }
  }
}

const nums = [-1, -2, -60, 40, 43]

const res = firstMissingPositive(nums)
console.log(res)
