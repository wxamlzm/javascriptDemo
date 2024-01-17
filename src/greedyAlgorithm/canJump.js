// 给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。数组中的每个元素代表你在该位置可以跳跃的最大长度。

// 判断你是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxLen = 1
  for (let i = 0; i < maxLen; i++) {
    maxLen = Math.max(maxLen, i + 1 + nums[i])
    if (maxLen >= nums.length) break
  }

  if (maxLen >= nums.length) {
    return true
  } else {
    return false
  }
}

const nums = [3, 0, 8, 2, 0, 0, 1]
const res = canJump(nums)
console.log(res)
