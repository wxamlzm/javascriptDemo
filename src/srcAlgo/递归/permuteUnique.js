// 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const res = []
  const len = nums.length

  const dfs = start => {      
    if (start === len) {
      res.push([...nums])
      return
    }

    const disc = []

    for (let i = start; i < len; i++) {
      if(nums[i] in disc) continue
      disc.push(nums[i])
      [nums[start], nums[i]] = [nums[i], nums[start]]
      dfs(start + 1);
      [nums[start], nums[i]] = [nums[i], nums[start]]
    }
  }

  dfs(0)
  return res
}

const nums = [1, 1, 2]
permuteUnique(nums)