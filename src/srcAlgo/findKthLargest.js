// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

// 你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let numsSort = nums.sort((a, b) => b - a)
  return numsSort[k - 1]
}

let nums = [3, 2, 3, 1, 2, 4, 5, 5, 6],
  k = 4
const res = findKthLargest(nums, k)
console.log(res)
