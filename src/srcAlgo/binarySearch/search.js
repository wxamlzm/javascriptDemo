// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] === target) {
  //     return i
  //   }
  // }
  // return -1
  // 排序
  if (nums.length <= 2) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) return i
    }
  } else {
    let i = 0
    let j = nums.length - 1
    while (i < j) {
      const mid = parseInt(i + (j - i) / 2)
      // 在左侧
      if (nums[mid] > target) {
        j = mid - 1
      } else if (nums[mid] < target) {
        i = mid + 1
      } else {
        return mid
      }
    }
  }

  return -1
}

let nums = [-1, 0, 5],
  target = 5

const res = search(nums, target)
console.log(res)
