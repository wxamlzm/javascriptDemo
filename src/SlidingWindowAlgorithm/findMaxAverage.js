// 给你一个由 n 个元素组成的整数数组 nums 和一个整数 k 。

// 请你找出平均数最大且 长度为 k 的连续子数组，并输出该最大平均数。

// 任何误差小于 10-5 的答案都将被视为正确答案。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let n = nums.length
  let prefixSum = Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i]
  }

  let maxAverage = -Infinity

  // 开始滑动窗口遍历
  for (let right = k; right <= n; right++) {
    // 使用前缀和计算当前窗口内的和（相当于 currentSum 更新）
    let windowSum =
      prefixSum[right] - (right - k > 0 ? prefixSum[right - k] : 0)

    // 计算平均数并更新最大平均数
    let average = windowSum / k
    maxAverage = Math.max(maxAverage, average)
  }

  return maxAverage
}

let nums = [0, 1, 1, 3, 3],
  k = 4

const res = findMaxAverage(nums, k)

console.log(res)
