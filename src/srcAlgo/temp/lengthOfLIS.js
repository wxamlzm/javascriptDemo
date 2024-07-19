// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

// 子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // 条件1： nums[i+1] > nums[i] 必然成立
  // 条件2： 在所有符合条件1的子数组中最长

  let maxLen = 0

  for (let i = 0; i < nums.length - 1; i++) {
    let tempLen = 1
    let pre = nums[i]
    const temp = []
    temp.push(pre)
    for (let j = i + 1; j < nums.length; j++) {
      console.log(`i:${nums[i]},j:${nums[j]}`)
      // 在遍历过程中碰到了需要跳过的项，该如何设置条件排除或者绕过？
      if (nums[j] > pre) {
        temp.push(nums[j])
        tempLen++
        pre = nums[j]
      }
    }
    console.log(temp)
    maxLen = Math.max(tempLen, maxLen)
  }
  // console.log(maxLen)
}

const nums = [0, 1, 0, 3, 2, 3]

lengthOfLIS(nums)
