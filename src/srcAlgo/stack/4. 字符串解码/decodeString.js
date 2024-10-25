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
  // 数字栈-存储重复次数
  const numStack = []
  // 字符串栈- 存储待处理字符串
  const strStack = []

  let currentNum = 0 // 当前数字
  let currentStr = '' // 当前字符串

  // 遍历输入字符串
  for (let char of s) {
    if (isNaN(char) === false) {
      // 处理多位数字的情况
      currentNum = currentNum * 10 + Number(char)
    } else if (char === '[') {
      // 遇到左括号，将当前数字和字符串分别压入对应栈中
      numStack.push(currentNum)
      strStack.push(currentStr)
      // 重置当前数字和字符串
      currentNum = 0
      currentStr = ''
    } else if (char === ']') {
      // 遇到右括号，处理栈顶的数字和字符串
      // 1. 获取重复次数
      const repeatTimes = numStack.pop()
      // 2.获取之前的字符串
      const prevStr = strStack.pop()
      // 3.将当前字符串重复指定次数，并与之前的字符串拼接
      currentStr = prevStr + currentStr.repeat(repeatTimes)
    } else {
      // 普通字符串直接追加到当前字符串
      currentStr += char
    }
  }

  return currentStr
}

let s = '3[a2[c]]'
const res = decodeString(s)
console.log(res)
