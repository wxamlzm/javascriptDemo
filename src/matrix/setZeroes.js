// 给定一个 m x n 的矩阵，如果一个元素为 0 ，
// 则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
// 关键词1： 原地算法
//

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let rows = new Array(matrix.length).fill(false)
  let cols = new Array(matrix[0].length).fill(false)

  // 遍历矩阵，标记需要清零的行和列
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = true
        cols[j] = true
      }
    }
  }

  // 根据标记清零
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (rows[i] || cols[j]) {
        matrix[i][j] = 0
      }
    }
  }
}
