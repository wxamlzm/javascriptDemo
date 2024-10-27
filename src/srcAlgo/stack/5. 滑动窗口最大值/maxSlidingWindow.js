// 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。
// 你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
// 返回 滑动窗口中的最大值 。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  // 使用双端队列来维护一个单调递减的队列
  // 队列中存储的是索引值，通过索引即可以获取具体数值，也可以判断是否在窗口范围内
  const deque = [] // 双端队列，春初索引
  const result = [] // 结果数组，存储每个窗口的最大值

  for (let i = 0; i < nums.length; i++) {
    // 1. 移除队列中所有小于当前值的元素
    // 保持队列单调递减的性质
    // 因为如果前面的数字小于当前数字，那么他们永远不可能成为后续窗口的最大值
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop()
    }

    // 2. 将当前索引值加入队列
    deque.push(i)

    // 3.移除超出窗口范围的索引
    if (deque[0] <= i - k) {
      deque.shift()
    }

    // 4.当形成第一个窗口后，开始收集结果
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
