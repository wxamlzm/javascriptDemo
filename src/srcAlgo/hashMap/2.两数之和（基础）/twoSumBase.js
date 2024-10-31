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
  // 因为要的是下标，我们遍历时能得到当前数下标，如果能匹配到，则能获得另一个
  const numIndexMap = {}

  for (let i = 0; i < nums.length; i++) {
    // 先匹配，再压入对象
    const cur = nums[i]
    // 补数
    const other = target - cur

    // 判断补数是否已经在对象中
    if (other in numIndexMap) {
      return [numIndexMap[other], i]
    } else {
      numIndexMap[cur] = i
    }
  }
  return null
}

const nums = [3, 2, 4],
  target = 6
const res = twoSum(nums, target)
console.log(res)
