// 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
// 在「杨辉三角」中，每个数是它左上方和右上方的数的和。

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generateTriangle = function (numRows) {
  const dp = []

  for (let i = 0; i < numRows; i++) {
    dp[i] = new Array(i + 1).fill(1)
    for (let j = 2; j < numRows; j++) {
      dp[i][j] = dp[i][j - 1] + dp[i][j]
    }
  }
  console.log(dp)
}

const numRows = 5
generateTriangle(numRows)