// 给定一个字符串 s ，请你找出其中不含有重复字符的最长子串的长度。

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let index = 0
  let maxLength = 0
  // 存储当前字符串每个字符的哈希表
  const map = new Map()
  // 遍历当前字符串
  for (let i = 0; i < s.length; i++) {
    const curWord = s[i]
    // 判断当前字符是否已经在哈希表内
    if (map.has(curWord)) {
      index = Math.max(map.get(curWord) + 1, index)
    }
    maxLength = Math.max(maxLength, i - index + 1)

    map.set(curWord, i)
  }
  return maxLength
}
let s = 'abcabcbb'
const res = lengthOfLongestSubstring(s)
console.log(res)
