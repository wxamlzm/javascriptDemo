// 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。
// 你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
// 返回 滑动窗口中的最大值 。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  // 双端队列用来春初候选最大值的索引
  const deque = []
  const result = []

  for (let i = 0; i < nums.length; i++) {
    // 1. 清理队列中过期的索引（已经不在当前窗口范围内的）
    if (deque.length > 0 && deque[0] <= i - k) {
      deque.shift()
    }

    // 2. 从队列尾移除所有小于当前元素的值
    // 保持队列是单调递减的
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop()
    }

    // 3. 将当前索引加入队列
    deque.push(i)

    // 4. 当窗口形成后，记录当前窗口的最大值
    if (i >= k - 1) {
      result.push(nums[deque[0]])
    }
  }

  return result
}

let nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3

const res = maxSlidingWindow(nums, k)
console.log(res)
