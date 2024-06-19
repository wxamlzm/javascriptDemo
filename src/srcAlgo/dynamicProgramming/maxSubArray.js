// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 子数组
// 是数组中的一个连续部分。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // dp[i,j] = Math.max(dp[i-1,j], dp[i,j+1])

  // const numsLen = nums.length

  // if (numsLen === 1) return nums[0]

  // let maxSubSum = -Infinity
  // for (let i = 0; i < numsLen; i++) {
  //   let tempSum = nums[i]
  //   maxSubSum = Math.max(maxSubSum, tempSum)

  //   if (i === numsLen - 1) break

  //   for (let j = i + 1; j < numsLen; j++) {
  //     tempSum += nums[j]
  //     maxSubSum = Math.max(maxSubSum, tempSum)
  //   }
  // }

  // return maxSubSum

  // nums中每一个index位置为终点？
  const numsLen = nums.length
  const dp = new Array(numsLen).fill(0)

  for (let i = 0; i < numsLen; i++) {
    // 每次更新终点时，重置sum
    let sum = nums[i]
    dp[i] = nums[i]
    for (let j = i - 1; j >= 0; j--) {
      sum += nums[j]
      dp[i] = Math.max(dp[i], sum)
    }
  }

  return Math.max(...dp)
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const res = maxSubArray(nums)
console.log(res)
