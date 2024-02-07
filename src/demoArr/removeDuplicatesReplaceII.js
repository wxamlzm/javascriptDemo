// 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，
// 使得出现次数超过两次的元素只出现两次 ，返回删除后数组的新长度。
// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let leftPointer = 0
  let count = 1
  while (leftPointer < nums.length) {
    let rightPointer = leftPointer + count
    if (rightPointer >= nums.length) break
    if (nums[leftPointer] === nums[rightPointer]) {
      if (count <= 1) {
        count++
      } else {
        nums.splice(rightPointer, 1)
      }
    } else {
      leftPointer = rightPointer
      count = 1
    }
  }
  return nums.length
}

let nums = [0, 0, 1, 1, 1, 1, 2, 3, 3]
const res = removeDuplicates(nums)
