// 给你一个下标从 0 开始的整数数组 nums 和一个整数 k 。
// 一开始你在下标 0 处。每一步，你最多可以往前跳 k 步，但你不能跳出数组的边界。
// 也就是说，你可以从下标 i 跳到 [i + 1， min(n - 1, i + k)] 包含 两个端点的任意位置。
// 你的目标是到达数组最后一个位置（下标为 n - 1 ），你的得分为经过的所有数字之和。
// 请你返回你能得到的最大得分 。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxResult = function (nums, k) {
  const n = nums.length
  const q = Array(n) // 为方便起见，仍然用一个大小为 n 的数组（空间 O(k) 需要实现环形队列）
  let rear = 0,
    tail = 0
  q[tail++] = 0
  for (let i = 1; i < n; i++) {
    // 1. 出
    if (q[rear] < i - k) {
      rear++
    }
    // 2. 转移
    nums[i] += nums[q[rear]]
    // 3. 入
    while (rear < tail && nums[i] >= nums[q[tail - 1]]) {
      tail--
    }
    q[tail++] = i
  }
  return nums[n - 1]
}

let nums = [1, -1, -2, 4, -7, 3]
let k = 2

maxResult(nums, k)
