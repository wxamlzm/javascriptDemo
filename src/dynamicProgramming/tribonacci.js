// 泰波那契序列 Tn 定义如下：

// T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2

// 给你整数 n，请返回第 n 个泰波那契数 Tn 的值。

/**
 * @param {number} n
 * @return {number}
 */
// var tribonacci = function (n) {
//   if (n === 0) return 0
//   if (n === 1) return 1
//   if (n === 2) return 1

//   return tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1)
// }

var tribonacci = function (n) {
  const dp = new Array(n).fill(0)

  dp[0] = 0
  dp[1] = 1
  dp[2] = 1

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1]
  }

  return dp[n]
}

let n = 4
const res = tribonacci(n)
// console.log(res)
