// 假设有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花不能种植在相邻的地块上，它们会争夺水源，两者都会死去。
// 给你一个整数数组 flowerbed 表示花坛，由若干 0 和 1 组成，其中 0 表示没种植花，1 表示种植了花。
// 另有一个数 n ，能否在不打破种植规则的情况下种入 n 朵花？能则返回 true ，不能则返回 false 。

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  const flowerbedLen = flowerbed.length
  // 插入n个数，使每个数的两边都是0
  // 寻找最长的0的长度
  let maxZeroCount = 0
  for (let i = 0; i < flowerbedLen; i++) {
    if (flowerbed[i] !== 0) continue
    let count = 1
    for (let j = i + 1; j < flowerbedLen; j++) {
      if (flowerbed[j] === 0) {
        count++
      } else {
        maxZeroCount = Math.max(maxZeroCount, count)
        break
      }
    }
  }
  const flowerCont = 2 * n - 1
  if (maxZeroCount - 2 >= flowerCont) {
    return true
  } else {
    return false
  }
}

let flowerbed = [1, 0, 1, 0, 1, 0, 1],
  n = 1

canPlaceFlowers(flowerbed, n)
