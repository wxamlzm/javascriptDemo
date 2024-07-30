// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 返回容器可以储存的最大水量。

// 说明：你不能倾斜容器。

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxArea = 0

  // 指针从两端开始，保证底部开始为最大值
  let i = 0
  let j = height.length - 1

  while (i < j) {
    // 底 * 高
    let bottomLen = j - i

    let minHeight = Math.min(height[i], height[j])

    maxArea = Math.max(maxArea, bottomLen * minHeight)

    if (height[i] > height[j]) {
      j--
    } else {
      i++
    }
  }
  return maxArea
}

const height = [1, 1]

const res = maxArea(height)

console.log(res)
