// 给你一个整数数组 nums 和一个整数 k 。

// 每一步操作中，你需要从数组中选出和为 k 的两个整数，并将它们移出数组。

// 返回你可以对数组执行的最大操作数。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let result = 0
  const numsCount = new Map()
  for (let i = 0; i < nums.length; i++) {
    const complete = k - nums[i]
    if (numsCount.has(complete) && numsCount.get(complete) > 0) {
      result++
      numsCount.set(complete, numsCount.get(complete) - 1)
    } else {
      numsCount.set(nums[i], (numsCount.get(nums[i]) || 0) + 1)
    }
  }
  return result
}

let nums = [3, 1, 3, 4, 3],
  k = 6

const res = maxOperations(nums, k)
console.log(res)
