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

  // nums中每一个index位置为起点，所得到的子数组的最大值作为dp记录
  const numsLen = nums.length
  const dp = new Array(numsLen).fill(0)

  let sum = 0
  for (let i = 0; i < numsLen; i++) {
    sum += nums[i]
    console.log(sum)
    // 这里的问题在于，怎么排除，前置的sum
    dp[i] = Math.max(nums[i], sum)
    // for (let j = i + 1; j < numsLen; j++) {}
  }
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const res = maxSubArray(nums)
// console.log(res)
