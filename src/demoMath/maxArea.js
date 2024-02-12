// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
// 返回容器可以储存的最大水量。
// 说明：你不能倾斜容器。

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxArea = -0

  let heightLen = height.length

  for (let i = 0; i < heightLen - 1; i++) {
    let maxHeight = height[i]
    for (let j = i + 1; j < heightLen; j++) {
      maxHeight = Math.min(height[i], height[j])
      maxArea = Math.max(maxArea, Math.imul(maxHeight, j - i))
    }
  }

  return maxArea
}
