// 给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 。

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let sMap = {}
  for (let i = 0; i < s.length; i++) {
    if (sMap[s[i]]) {
      sMap[s[i]] += 1
    } else {
      sMap[s[i]] = 1
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (sMap[s[i]] === 1) return i
  }
  return -1
}

let s = 'loveleetcode'
const res = firstUniqChar(s)
