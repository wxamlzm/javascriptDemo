// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 请必须使用时间复杂度为 O(log n) 的算法。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  let mid = (right - left) >> 1
  mid = mid + left

  while (left < right) {
    mid = (right - left) >> (1 + left)
    if (target < nums[mid]) {
      left = mid
    } else {
      right = mid
    }
  }
  console.log(mid)
}

let nums = [1, 3, 5, 6],
  target = 5

searchInsert(nums, target)
