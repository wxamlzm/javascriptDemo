// 实现 pow(x, n) ，即计算 x 的整数 n 次幂函数（即，xn ）。

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  // 将 x 的 n 次幂问题

  // 转换成

  // x * x 重复n次

  let res = 1

  if (n === 0) return res

  for (let i = 1; i <= Math.abs(n); i++) {
    if (n > 0) {
      res *= x
    } else {
      res = res / x
    }
  }

  return res
}

const x = 2,
  n = -2

const res = myPow(x, n)
console.log(res)
