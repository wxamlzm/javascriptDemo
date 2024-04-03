// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

// 你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // 尝试采用快速排序
  // 快速排序的核心包括烧饼划分和递归？
  // 抄了一遍，没完全理解
  const quickSelect = (nums, k) => {
    const base = nums[0]

    const big = [],
      equal = [],
      small = []

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > base) {
        big.push(nums[i])
      } else if (nums[i] < base) {
        small.push(nums[i])
      } else {
        equal.push(nums[i])
      }
    }

    if (k <= big.length) {
      return quickSelect(big, k)
    } else if (nums.length - small.length < k) {
      return quickSelect(small, k - nums.length + small.length)
    } else {
      return base
    }
  }

  return quickSelect(nums, k)
}

let nums = [3, 2, 3, 1, 2, 4, 5, 5, 6],
  k = 4
const res = findKthLargest(nums, k)
console.log(res)
