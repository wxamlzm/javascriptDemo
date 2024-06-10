// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function (n) {
//   if (n === 0) return 1
//   if (n === 1) return 1

//   // 走到n-1后1步，走到n-2后两步
//   return climbStairs(n - 1) + climbStairs(n - 2)
// }

var climbStairs = function (n) {
  const climbStairsCountArr = new Array(n + 1).fill(0)

  for (let i = 0; i <= n; i++) {
    if (i === 0 || i === 1) {
      climbStairsCountArr[i] = 1
    } else {
      climbStairsCountArr[i] =
        climbStairsCountArr[i - 1] + climbStairsCountArr[i - 2]
    }
  }

  return climbStairsCountArr[n]
}

const res = climbStairs(44)

console.log(res)
