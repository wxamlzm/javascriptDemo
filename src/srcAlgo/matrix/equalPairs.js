// 给你一个下标从 0 开始、大小为 n x n 的整数矩阵 grid ，
// 返回满足 Ri 行和 Cj 列相等的行列对 (Ri, Cj) 的数目。
// 如果行和列以相同的顺序包含相同的元素（即相等的数组），则认为二者是相等的。

/**
 * @param {number[][]} grid
 * @return {number}
 */

var equalPairs = function (grid) {
  const transposeGrid = transpose(grid)
  let count = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < transposeGrid.length; j++) {
      if (equalArray(grid[i], transposeGrid[j])) count++
    }
  }
  return count
}

const transpose = grid => {
  var rows = grid.length
  // 如果不是方阵（即行数和列数不相等）则转置可能没有意义，但此处假设是n*n的情况
  var cols = grid[0].length

  var newGrid = new Array(cols)

  for (var i = 0; i < cols; i++) {
    newGrid[i] = new Array(rows)

    for (var j = 0; j < rows; j++) {
      // 将原数组的[j][i]元素放入新数组的[i][j]位置
      newGrid[i][j] = grid[j][i]
    }
  }

  return newGrid
}

const equalArray = (array1, array2) => {
  if (array1.length !== array2.length) return false

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false
  }
  return true
}

let grid = [
  [3, 1, 2, 2],
  [1, 4, 4, 5],
  [2, 4, 2, 2],
  [2, 4, 2, 2]
]
const res = equalPairs(grid)
console.log(res)
