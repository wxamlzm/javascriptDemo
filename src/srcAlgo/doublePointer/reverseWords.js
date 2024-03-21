/*
 * @Author: zd
 * @Date: 2024-03-20 10:42:43
 * @LastEditors: zd
 * @LastEditTime: 2024-03-21 14:17:05
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
  const sFormat = s.trim()
  const len = sFormat.length
  let fast = len - 1
  let slow = fast
  // 初始化两个指针，因为需要反转，所以从s末尾开始
  // 期望快指针到达word的头，而慢指针停留在word的尾部
  const strArr = []
  while (fast >= 0) {
    while (fast >= 0 && sFormat[fast] === ' ') {
      fast--
      slow = fast
    }

    while (fast >= 0 && sFormat[fast] !== ' ') {
      fast--
    }

    strArr.push(sFormat.substring(fast + 1, slow + 1))
  }

  return strArr.join(' ')
}

let s = '  hello world  '
const res = reverseWords(s)
console.log(res)
