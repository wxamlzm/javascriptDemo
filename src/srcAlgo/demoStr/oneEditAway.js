// 字符串有三种编辑操作:插入一个英文字符、删除一个英文字符或者替换一个英文字符。
// 给定两个字符串，编写一个函数判定它们是否只需要一次(或者零次)编辑。

/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function (first, second) {
  // 判断first和second
  // 只能想到如果长度相差超过1，那应该是肯定是返回false
  // 下面是抄的
  const m = first.length,
    n = second.length

  let dp = Array.from({ length: m + 1 }, () => new Array(n + 1))

  dp[0][0] = 0
  for (let i = 1; i <= n; i++) {
    dp[0][i] = i
  }
  for (let j = 1; j <= m; j++) {
    dp[j][0] = j
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (first[i - 1] === second[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
      }
    }
  }
  return dp[m][n] <= 1
}

let first = 'pale'
second = 'ple'
oneEditAway(first, second)
