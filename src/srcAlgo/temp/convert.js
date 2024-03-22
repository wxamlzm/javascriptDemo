// 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

// 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

// P   A   H   N
// A P L S I I G
// Y   I   R

// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const matrix = Array.from({ length: numRows }, () => [])
  let row = 0
  let col = 0

  matrix[row][col] = s[0]
  console.log(matrix)
  // 已遍历字符数
  let count = 0
  while (count < s.length) {
    matrix[row][col] = s[0]
  }
}

const s = 'PAYPALISHIRING',
  numRows = 3
const res = convert(s, numRows)
