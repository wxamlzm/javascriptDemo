// 给你一个数组 candies 和一个整数 extraCandies ，其中 candies[i] 代表第 i 个孩子拥有的糖果数目。
// 对每一个孩子，检查是否存在一种方案，将额外的 extraCandies 个糖果分配给孩子们之后，
// 此孩子有 最多 的糖果。注意，允许有多个孩子同时拥有 最多 的糖果数目。

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  // 求最大值
  const sortedCandies = candies.toSorted((a, b) => a - b)
  const maxCandies = sortedCandies[candies.length - 1]
  const ans = []
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= maxCandies) {
      ans.push(true)
    } else {
      ans.push(false)
    }
  }
  return ans
}

let candies = [12, 1, 12],
  extraCandies = 1
kidsWithCandies(candies, extraCandies)
