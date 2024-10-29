// 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。
// 你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
// 返回 滑动窗口中的最大值 。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  // 队列顶部出，队列尾部入，双端队列契合题意
  const deque = []
  // 用于压入结果
  const result = []

  // 下标可以获取值，也可以便于控制窗口
  for (let i = 0; i < nums.length; i++) {
    // 只留最大值，如果小于当前值，就说明不可能成为最大值
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop()
    }

    deque.push(i)

    // 移动窗口的边界，队列顶部序号小于当前需要扣掉队列长度的时候，说明超出窗口了
    if (deque[0] <= i - k) {
      deque.shift()
    }

    // 当第一次窗口形成的时候，压入结果
    if (i >= k - 1) {
      result.push(nums[deque[0]])
    }
  }
  return result
}

let nums = [1, -1],
  k = 3

const res = maxSlidingWindow(nums, k)
console.log(res)
