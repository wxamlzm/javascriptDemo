/*
 * @Author: zd
 * @Date: 2024-03-14 08:15:52
 * @LastEditors: zd
 * @LastEditTime: 2024-03-14 08:34:22
 * @Description:
 */
// 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

// 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

// 进阶：

// 如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sIndex = 0

  const stack = []

  for (let i = 0; i < t.length; i++) {
    if (sIndex < s.length && t[i] === s[sIndex]) {
      stack.push(t[i])

      sIndex++
    }
  }
  // 检查 stack 是否包含了 s 中的所有字符（按顺序）
  if (s.length > stack.length) return false
  while (sIndex < s.length && stack.length > 0) {
    if (stack.pop() !== s[sIndex]) {
      return false
    }

    sIndex++
  }

  return sIndex === s.length
}

let s = 'aaaaaa',
  t = 'bbaaaa'

const arr = isSubsequence(s, t)
console.log(arr)
