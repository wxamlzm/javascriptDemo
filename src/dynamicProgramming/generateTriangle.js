// 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
// 在「杨辉三角」中，每个数是它左上方和右上方的数的和。

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generateTriangle = function (numRows) {
  let dp = []
  for (let i = 0; i < numRows; i++) {
    dp[i] = new Array(i + 1).fill(1)
    for (let j = 1; j < i; j++) {
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
    }
  }
  return dp
}

const numRows = 5
const res = generateTriangle(numRows)
console.log(res)
