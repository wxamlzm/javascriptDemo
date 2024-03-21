// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串的长度。

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let i = -1

  const sMap = {}

  let maxLen = 0

  for (let j = 0; j < s.length; j++) {
    if (sMap[s[j]] !== undefined) {
      i = Math.max(i, sMap[s[j]])
    }
    sMap[s[j]] = j

    maxLen = Math.max(maxLen, j - i)
  }
  return maxLen
}

let s = 'au'
const res = lengthOfLongestSubstring(s)
console.log(res)
