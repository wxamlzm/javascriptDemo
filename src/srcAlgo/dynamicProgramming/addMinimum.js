// 给你一个字符串 word ，你可以向其中任何位置插入 "a"、"b" 或 "c" 任意次，返回使 word 有效 需要插入的最少字母数。
// 如果字符串可以由 "abc" 串联多次得到，则认为该字符串 有效 。

/**
 * @param {string} word
 * @return {number}
 */
var addMinimum = function (word) {
  const n = word.length
  const d = new Array(n + 1).fill(0)
  for (let i = 1; i <= n; i++) {
    d[i] = d[i - 1] + 2
    if (i > 1 && word[i - 1] > word[i - 2]) {
      d[i] = d[i - 1] - 1
    }
  }
  return d[n]
}

let word = 'abcaa'
addMinimum(word)
