// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 子数组
// 是数组中的一个连续部分。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // dp[i,j] = Math.max(dp[i-1,j], dp[i,j+1])

  const numsLen = nums.length

  if (numsLen === 1) return nums[0]

  let maxSubSum = -Infinity
  for (let i = 0; i < numsLen; i++) {
    let tempSum = nums[i]
    maxSubSum = Math.max(maxSubSum, tempSum)

    if (i === numsLen - 1) break

    for (let j = i + 1; j < numsLen; j++) {
      tempSum += nums[j]
      maxSubSum = Math.max(maxSubSum, tempSum)
    }
  }

  return maxSubSum
}

const nums = [-2, 1]
const res = maxSubArray(nums)
console.log(res)
