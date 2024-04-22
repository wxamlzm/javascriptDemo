// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

// 什么是全排列？
// 一个数字在所有位置都呆过

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const len = nums.length
  const res = []

  const dfs = x => {
    if (x === len) {
      res.push([...nums])
      return
    }

    for (let i = x; i < len; i++) {
      [nums[x], nums[i]] = [nums[i], nums[x]] // 优化的交换部分
      dfs(x + 1)
      [nums[x], nums[i]] = [nums[i], nums[x]] // 恢复原状
    }
  }

  dfs(0)
  return res
}

const nums = [1, 2, 3]

permute(nums)
