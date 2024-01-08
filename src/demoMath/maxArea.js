// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
// 返回容器可以储存的最大水量。
// 说明：你不能倾斜容器。

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (heightArray) {
  // 这更像一道数学题啊
  // 横轴是index吧，纵轴就是heightArray[index],然后我要获取的是 (Math.abs(index[i] - index[j])) * (Math.abs(heightArray[i]-heightArray[j]))
  let left = 0
  let right = heightArray.length - 1
  let maxWater = 0

  while (left < right) {
    // 计算当前左右指针对应的高度形成的矩形面积
    const currentHeight = Math.min(heightArray[left], heightArray[right])
    const currentArea = currentHeight * (right - left)

    // 更新最大水量
    maxWater = Math.max(maxWater, currentArea)

    // 移动高度较小的那一端，增大宽度或保持相同高度但宽度更大的情况
    if (heightArray[left] < heightArray[right]) {
      left++
    } else {
      right--
    }
  }

  return maxWater
}
