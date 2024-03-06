// 给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 。

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  // 缺乏美感
  let sMap = {}
  for (let i = 0; i < s.length; i++) {
    if (sMap[s[i]]) {
      sMap[s[i]].count++
    } else {
      sMap[s[i]] = { count: 1, index: i }
    }
  }
  let minIndex = Infinity
  for (let key in sMap) {
    if (sMap[key].count === 1) {
      minIndex = Math.min(sMap[key].index, minIndex)
    }
  }
  if (minIndex === Infinity) return -1
  return minIndex
}

let s = 'loveleetcode'
const res = firstUniqChar(s)
