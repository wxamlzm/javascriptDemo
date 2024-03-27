// 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const matrix = Array.from({ length: n }, () => [])
  let l = 0,
    r = n - 1,
    t = 0,
    b = n - 1

  let num = 1,
    tar = n * n

  while (num <= tar) {
    for (let i = l; i <= r; i++) {
      matrix[t][i] = num
      num++
    }

    t++

    for (let i = t; i <= b; i++) {
      matrix[i][r] = num
      num++
    }

    r--

    for (let i = r; i >= l; i--) {
      matrix[b][i] = num
      num++
    }

    b--

    for (let i = b; i >= t; i--) {
      matrix[i][l] = num
      num++
    }
    l++
  }
  return matrix
}

const n = 3
// const n = 1
const res = generateMatrix(3)
console.log(res)
