// 给你一个整数数组 nums ，判断这个数组中是否存在长度为 3 的递增子序列。
// 如果存在这样的三元组下标 (i, j, k) 且满足 i < j < k ，
// 使得 nums[i] < nums[j] < nums[k] ，返回 true ；否则，返回 false 。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  // 肯定不能三重遍历是吧。。

  // 动态规划，每个计算每个i的节点的最长升序子序列
  // 好像不是动态规划，单纯的记事本缓存
  // const dp = new Array(nums.length).fill(0)
  // for (let i = 0; i < nums.length; i++) {
  //   let maxLength = 1
  //   let max = nums[i]
  //   if (nums[i] === 0) {
  //     console.log('a')
  //   }
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[j] > max) {
  //       maxLength++
  //       dp[i] = Math.max(dp[i], maxLength)
  //     } else
  //     // 这个else没想法了，因为需要递推前面的序号，感觉换个思路会更好
  //     {
  //       maxLength = 1
  //     }
  //     max = nums[j]
  //   }
  // }

  // return Math.max(...dp) >= 3
  const n = nums.length
  if (n < 3) {
    return false
  }
  let first = nums[0],
    second = Number.MAX_VALUE
  for (let i = 1; i < n; i++) {
    const num = nums[i]
    if (num > second) {
      return true
    } else if (num > first) {
      second = num
    } else {
      first = num
    }
  }
  return false
}

let nums = [1, 5, 0, 4, 1, 3]
const res = increasingTriplet(nums)
console.log(res)
