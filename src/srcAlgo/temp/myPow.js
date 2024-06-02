// 实现 pow(x, n) ，即计算 x 的整数 n 次幂函数（即，xn ）。

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) return 1
  if (n < 0) {
    return 1 / myPow(x, -n)
  }
  if (n % 2 === 0) {
    const half = myPow(x, n / 2)
    return half * half
  } else {
    return x * myPow(x, n - 1)
  }
}

const x = 2,
  n = -2

const res = myPow(x, n)
console.log(res)
