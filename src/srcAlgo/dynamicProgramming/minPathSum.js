// 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

// 说明：每次只能向下或者向右移动一步。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  // i是横向j是纵向

  // dp[i][j] =
  //   Math.min(
  //     // 上方过来的
  //     dp[i - 1][j],
  //     // 左侧过来的
  //     dp[i][j - 1]
  //   ) + grid[i][j]

  const colCount = grid[0].length
  const rowCount = grid.length

  const dp = Array.from({ length: rowCount }, () => Array(colCount).fill(0))

  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = grid[i][j]
      } else if (i === 0 && j !== 0) {
        dp[i][j] = dp[i][j - 1] + grid[i][j]
      } else if (i !== 0 && j === 0) {
        dp[i][j] = dp[i - 1][j] + grid[i][j]
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
      }
    }
  }

  return dp[rowCount - 1][colCount - 1]
}

const grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
]

const res = minPathSum(grid)
console.log(res)
