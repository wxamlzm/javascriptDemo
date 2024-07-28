// 给你一个整数 n ，请你找出并返回第 n 个 丑数 。

// 丑数 就是质因子只包含 2、3 和 5 的正整数。

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let ugly = [1]
  let p2 = 0,
    p3 = 0,
    p5 = 0

  for (let i = 1; i < n; i++) {
    let next2 = ugly[p2] * 2
    let next3 = ugly[p3] * 3
    let next5 = ugly[p5] * 5

    let nextUgly = Math.min(next2, next3, next5)
    ugly.push(nextUgly)

    if (nextUgly === next2) p2++
    if (nextUgly === next3) p3++
    if (nextUgly === next5) p5++
  }

  return ugly[n - 1]
}

const n = 10
nthUglyNumber(n)
