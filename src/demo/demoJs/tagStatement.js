/*
 * @Author: zd
 * @Date: 2022-11-21 13:26:06
 * @LastEditors: zd
 * @LastEditTime: 2022-11-21 13:58:43
 * @Description: 标签语句
 */
var matrix = getData()
var sum = 0,
  success = false

// 矩阵校验
compute_sum: if (matrix) {
  for (var x = 0; x < matrix.length; x++) {
    var row = matrix[x]
    if (!row) break compute_sum
    for (var y = 0; y < row.length; y++) {
      var cell = row[y]
      if (isNaN(cell)) break compute_sum
      sum += cell
    }
  }
  success = true
}
