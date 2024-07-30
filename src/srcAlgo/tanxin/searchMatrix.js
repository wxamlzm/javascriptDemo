// 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：

// 每行的元素从左到右升序排列。
// 每列的元素从上到下升序排列。

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  while (matrix.length > 2) {
    // 二分？
    let row = matrix.length
    let col = matrix[0].length
    // 取中值
    let midRow = Math.floor(row / 2)
    let midCol = Math.floor(col / 2)
    const centerNum = matrix[midRow][midCol]

    if (centerNum === target) return true
    // 更新matrix
    if (centerNum > target) {
      matrix = matrix
        .slice(0, midRow + 1)
        .map(colArray => colArray.slice(0, midCol + 1))
    } else {
      matrix = matrix.slice(midRow).map(colArray => colArray.slice(midCol))
    }
  }
  let rowIndex = 0
  let colIndex = 0

  while (rowIndex < matrix.length) {
    while (colIndex < matrix[0].length) {
      if (matrix[rowIndex][colIndex] === target) return true

      colIndex++
    }
    rowIndex++
  }
  return false
}

const matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ],
  target = 31
const res = searchMatrix(matrix, target)
console.log(res)
