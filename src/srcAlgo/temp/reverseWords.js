/*
 * @Author: zd
 * @Date: 2024-03-20 10:42:43
 * @LastEditors: zd
 * @LastEditTime: 2024-03-21 13:29:03
 * @Description:
 */
// 给你一个字符串 s ，请你反转字符串中 单词 的顺序。
// 单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。
// 返回 单词 顺序颠倒且 单词 之间用单个空格连接的结果字符串。
// 注意：输入字符串 s中可能会存在前导空格、尾随空格或者单词间的多个空格。
// 返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // 这题可以考虑用双指针做
  // for (let left = s.length - 1; left >= 0; left--) {
  //   // 碰到空格时
  //   if (s[left] === ' ') {
  //     console.log(1)
  //   }
  //   // 碰到空格后再次遇到字符时
  //   // 遍历完成时
  // }
  let strArr = []
  let str = ''
  let left = s.length - 1
  let right = left

  while (left >= 0) {
    if (s[left] === ' ') {
      // 左右指针都移到空格的左侧位置
      left--
      str = s.substring(left + 1, right + 1)
      right = left
    } else {
      left--
    }
  }
  console.log(strArr)
  return strArr.join(' ')
}

let s = '  hello world  '
const res = reverseWords(s)
console.log(res)
