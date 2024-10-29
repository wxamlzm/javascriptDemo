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

var twoSum = function (nums, target) {
  let array = []
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        array = [i, j]
      }
    }
  }
  return array
}

// 这个写法降低了近一半的时间，但是为什么
function twoSum (nums, target) {
  let hashTable = {}
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i]
    const complement = target - x
    if (complement in hashTable) {
      return [hashTable[complement], i]
    }
    hashTable[x] = i
  }
  return null // 或者返回空数组：return [];
}
