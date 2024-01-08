// 给你一个非负整数 num ，请你返回将它变成 0 所需要的步数。 如果当前数字是偶数，你需要把它除以 2 ；否则，减去 1 。

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  //  1. 定义全局变量存储步骤
  let steps = 0
  // 对num进行判断直到num为0
  while (num !== 0) {
    // 偶数
    if (num % 2 === 0) {
      num = num / 2
    } else {
      // 奇数
      num -= 1
    }
    steps++
  }
  return steps
}
