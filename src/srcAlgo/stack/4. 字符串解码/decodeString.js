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
  const countStack = []
  const contextStack = []

  let curCount = 0
  let curStr = ''

  for (let char of s) {
    // 是数值
    if (isNaN(char) === false) {
      curCount = curCount * 10 + Number(char)
    } else if (char === '[') {
      // 数值入栈
      countStack.push(curCount)
      // 重置数值
      curCount = 0
      // str入栈？
      contextStack.push(curStr)
      curStr = ''
    } else if (char === ']') {
      // 右括号会从内层开始？
      const strTop = contextStack.pop()
      const countTop = countStack.pop()
      curStr = strTop + curStr.repeat(countTop)
    } else {
      curStr += char
    }
  }
  return curStr
}

let s = '3[a2[c]]'
const res = decodeString(s)
console.log(res)
