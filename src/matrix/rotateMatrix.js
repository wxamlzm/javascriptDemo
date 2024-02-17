// 给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。

// 不占用额外内存空间能否做到？

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // 设二维数组为i,j
  // 第一行的x元素，旋转后刚好是最后一列的x元素，且第一行刚好是最后一列的
  // matrix[i][j] = matrix[j][n-i]

  const n = matrix.length
  const matrix_new = new Array(n).fill(0).map(() => new Array(n).fill(0))
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix_new[j][n - i - 1] = matrix[i][j]
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = matrix_new[i][j]
    }
  }
}

matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
rotate(matrix)
