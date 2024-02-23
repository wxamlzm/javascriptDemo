// 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。
// 你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
// 返回 滑动窗口中的最大值 。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const deque = []
  const maxArray = []

  for (let i = 0; i < nums.length; i++) {
    // 移除窗口左侧不在范围内的元素
    if (deque.length > 0 && deque[0].index <= i - k) {
      deque.shift()
    }

    // 将窗口右侧的元素加入单调递减队列
    while (deque.length > 0 && nums[i] >= nums[deque[deque.length - 1].index]) {
      deque.pop()
    }
    deque.push({ value: nums[i], index: i })

    // 只有当i位置在窗口范围内时才添加最大值到结果数组
    if (i >= k - 1) {
      maxArray.push(deque[0].value)
    }
  }

  return maxArray
}

let nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3

const res = maxSlidingWindow(nums, k)
console.log(res)
