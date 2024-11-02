/*
 * @Author: zd
 * @Date: 2024-01-04 14:41:16
 * @LastEditors: zd
 * @LastEditTime: 2024-01-04 15:51:08
 * @Description:
 */

// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target 的那两个整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案。

function twoSum (nums, target) {
  const numIndexMap = {}

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i]
    const anOther = target - x
    // 如果能找到anOther说明该值已经在前面出现过了
    if (anOther in numIndexMap) {
      return [numIndexMap[anOther], i]
    } else {
      numIndexMap[x] = i
    }
  }
  return null
}

const nums = [3, 2, 4],
  target = 6
const res = twoSum(nums, target)
console.log(res)
