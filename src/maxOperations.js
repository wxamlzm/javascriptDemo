// 给你一个整数数组 nums 和一个整数 k 。

// 每一步操作中，你需要从数组中选出和为 k 的两个整数，并将它们移出数组。

// 返回你可以对数组执行的最大操作数。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  const numsMap = {}

  for (let i = 0; i < nums.length; i++) {
    if (!numsMap[nums[i]]) {
      numsMap[nums[i]] = k - nums[i]
    }
  }

  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === numsMap[k - nums[i]]) {
      count++
    }
  }

  return Math.floor(count / 2)
}

let nums = [3, 1, 3, 4, 3],
  k = 6

const res = maxOperations(nums, k)
console.log(res)
