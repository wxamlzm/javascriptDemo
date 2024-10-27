/*
  给定一个经过编码的字符串，返回它解码后的字符串。
  编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
  你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
  此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
*/

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  // 遍历次数栈
  const countStack = []
  // 字符串栈
  const strStack = []

  // 初始化遍历次数
  let currentNum = 0
  // 初始化临时字符串
  let currentStr = ''

  // 遍历字符串
  for (let char of s) {
    if (isNaN(char) === false) {
      currentNum = currentNum * 10 + Number(char)
    } else if (char === '[') {
      countStack.push(currentNum)
      currentNum = 0
      strStack.push(currentStr)
      currentStr = ''
    } else if (char === ']') {
      let repestTimes = countStack.pop()
      let prevStr = strStack.pop()
      currentStr = prevStr + currentStr.repeat(repestTimes)
    } else {
      currentStr += char
    }
  }

  return currentStr
}

let s = '3[a2[c]]'
const res = decodeString(s)
console.log(res)
