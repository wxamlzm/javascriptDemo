/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {
  const len = nums.length
  let sum = 0
  for (let i = 0; i < len; i++) {
      const iStr = i.toString(2)
      const reg = /1/g
      const res = iStr.match(reg)
      const count = !res ? 0 : res.length
      if (count === k) {
          sum += nums[i]
      }
  }

  return sum
};