/*
 * @Author: zd
 * @Date: 2024-03-13 14:09:27
 * @LastEditors: zd
 * @LastEditTime: 2024-03-13 14:29:02
 * @Description: 当成用于理解二进制概念吧
 */
// 给你一个 二进制 字符串 s ，其中至少包含一个 '1' 。

// 你必须按某种方式 重新排列 字符串中的位，使得到的二进制数字是可以由该组合生成的 最大二进制奇数 。

// 以字符串形式，表示并返回可以由给定组合生成的最大二进制奇数。

// 注意 返回的结果字符串 可以 含前导零。

/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
  const strArr1 = []
  const strArr0 = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1') {
      strArr1.unshift(s[i])
    } else {
      strArr0.push(s[i])
    }
  }
  const lastIndexOf1 = strArr1.lastIndexOf('1')

  strArr1.splice(lastIndexOf1, 0, ...strArr0)
  return strArr1.join('')
}

let s = '010111111'
const res = maximumOddBinaryNumber(s)
console.log(res)
