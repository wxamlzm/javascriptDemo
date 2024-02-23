// 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

// 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

// 三个字母至少

var isSubsequence = function (s, t) {
  if (!s) return true
  let left = 0
  let right = 0
  while (right < t.length) {
    let s1 = s[left]
    let s2 = t[right]
    if (s1 == s2) {
      left++
    }
    if (left >= s.length) {
      return true
    }
    right++
  }
  return false
}
