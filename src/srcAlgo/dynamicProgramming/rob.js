// 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function (nums) {
  const dp = new Array(nums.length).fill(0)

  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || i === 1) {
      dp[i] = nums[i]
    } else {
      if (dp[i - 3] !== undefined) {
        dp[i] = Math.max(dp[i - 2], dp[i - 3]) + nums[i]
      } else {
        dp[i] = Math.max(dp[i - 2]) + nums[i]
      }
    }
  }
  return Math.max(...dp)
}

const nums = [2, 7, 9, 3, 1]
const res = rob(nums)
console.log(res)
