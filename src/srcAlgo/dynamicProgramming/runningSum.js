// 给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。

// 请返回 nums 的动态和。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const sumArr = new Array(nums.length).fill(0)

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      sumArr[i] = nums[i]
    } else {
      sumArr[i] = nums[i] + sumArr[i - 1]
    }
  }
  return sumArr
}

const nums = [3, 1, 2, 10, 1]
runningSum(nums)
