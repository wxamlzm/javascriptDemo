// 给你一个非负整数 num ，请你返回将它变成 0 所需要的步数。 如果当前数字是偶数，你需要把它除以 2 ；否则，减去 1 。

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  if (num !== 0) {
    return
  } else if (num % 2 === 1) {
    numberOfSteps(num - 1)
  } else {
    numberOfSteps(num / 2)
  }
}
