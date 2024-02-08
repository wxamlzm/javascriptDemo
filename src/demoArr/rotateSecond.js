// 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let rotateCount = k % Math.imul(nums.length, 2)
  for (let i = 0; i < rotateCount; i++) {
    nums.unshift(nums.pop(nums.length - 1))
  }
}

let nums = [1, 2],
  k = 5

rotate(nums, k)
