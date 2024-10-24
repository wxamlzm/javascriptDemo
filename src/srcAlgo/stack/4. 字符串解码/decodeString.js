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
  const numStack = [] // 存放数字的栈
  const strStack = [] // 存放字符串的栈
  let currentNum = 0 // 当前数字缓存
  let currentStr = '' // 当前字符串

  for (let char of s) {
    if (isNaN(char) === false) {
      // 处理多为数字
      currentNum = currentNum * 10 + Number(char)
    } else if (char === '[') {
      // 遇到左括号，将当前数字和字符串入栈
      numStack.push(currentNum)
      strStack.push(currentStr)
      // 重置当前数字和字符串
      currentNum = 0
      currentStr = ''
    } else if (char === ']') {
      // 遇到右括号，处理重复逻辑
      let repeatTimes = numStack.pop()
      let temp = currentStr.repeat(repeatTimes)
      // 与上一层的字符串拼接
      currentStr = strStack.pop() + temp
    } else {
      // 普通字符直接拼接到当前字符串
      currentStr += char
    }
  }

  return currentStr
}

function isEnglishLetter (char) {}

let s = '3[a]2[bc]'
const res = decodeString(s)
console.log(res)
