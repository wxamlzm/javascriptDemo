// 你的笔记本键盘存在故障，每当你在上面输入字符 'i' 时，它会反转你所写的字符串。而输入其他字符则可以正常工作。

// 给你一个下标从 0 开始的字符串 s ，请你用故障键盘依次输入每个字符。

// 返回最终笔记本屏幕上输出的字符串。

/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
  let finalStrArr = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== 'i') {
      finalStrArr.push(s[i])
    } else {
      finalStrArr.reverse()
    }
  }
  return finalStrArr.join('')
}
const s = 'string'
const res = finalString(s)
console.log(res)
