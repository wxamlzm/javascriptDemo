// 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const matrix = Array.from({ length: n }, () => [])

  let col = 0
  let row = 0
  let flag = 0
  let iter = 1

  let rowOrCol = false

  let i = 1

  while (i <= n * n) {
    // 行列切换
    if (rowOrCol) {
      if (iter > 0) {
        if (row === n - 1) {
          // 行列切换
          rowOrCol = !rowOrCol
          //
          flag++
          if (flag % 2 === 0) {
            iter = -iter
          }
          continue
        }
        matrix[row][col] = i

        row += iter
        i++
      } else {
        if (row === 0) {
          // 行列切换
          rowOrCol = !rowOrCol
          //
          flag++
          if (flag % 2 === 0) {
            iter = -iter
          }
          continue
        }
        matrix[row][col] = i

        row += iter
        i++
      }
    } else {
      if (iter > 0) {
        if (col === n - 1) {
          // 行列切换
          rowOrCol = !rowOrCol
          //
          flag++
          if (flag % 2 === 0) {
            iter = -iter
          }
          continue
        }
        matrix[row][col] = i
        col += iter
        i++
      } else {
        if (col === 0) {
          // 行列切换
          rowOrCol = !rowOrCol
          //
          flag++
          if (flag % 2 === 0) {
            iter = -iter
          }
          continue
        }
        matrix[row][col] = i

        col += iter
        i++
      }
    }
  }

  return matrix
}

const n = 3
// const n = 1
const res = generateMatrix(3)
console.log(res)
