// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，
// 返回矩阵中的所有元素。

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let res = []
  if (matrix.length === 0 || matrix[0].length === 0) return res

  let top = 0
  let bottom = matrix.length - 1
  let left = 0
  let right = matrix[0].length - 1

  while (true) {
    // move right
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i])
    }
    top++
    if (top > bottom || left > right) break

    // move down
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right])
    }
    right--
    if (top > bottom || left > right) break

    // move left
    for (let i = right; i >= left; i--) {
      res.push(matrix[bottom][i])
    }
    bottom--
    if (top > bottom || left > right) break

    // move up
    for (let i = bottom; i >= top; i--) {
      res.push(matrix[i][left])
    }
    left++
    if (top > bottom || left > right) break
  }

  return res
}

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
]
spiralOrder(matrix)
