// 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：
// 每行的元素从左到右升序排列。
// 每列的元素从上到下升序排列。

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let rowLeft = 0
  let rowRight = matrix[0].length - 1

  let colTop = 0
  let colBottom = matrix.length - 1
  let ans = false

  while (rowLeft < rowRight && colTop < colBottom) {
    let rowMid = (rowRight - rowLeft) >> 1
    let colMid = (colBottom - colTop) >> 1
    const source = matrix[rowMid][colMid]
    if (target === source) {
      ans = true
      break
    }
    if (target < source) {
      rowLeft = rowMid
      colBottom = colMid
    } else {
      rowRight = rowMid
      colTop = colMid
    }
  }

  return ans
}

let matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ],
  target = 5

const res = searchMatrix(matrix, target)
console.log(res)
