// 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。
// 你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
// 返回 滑动窗口中的最大值 。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let maxArray = []
  for (let left = 0; left < nums.length - (k - 1); left++) {
    let right = left + k
    const cutArray = nums.slice(left, right)
    const maxCurArrayNum = cutArray.sort((a, b) => b - a)[0]
    maxArray.push(maxCurArrayNum)
  }
  return maxArray
}

let nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3

const res = maxSlidingWindow(nums, k)
console.log(res)
