// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串的长度。

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 左指针
  let left = 0
  // 缓存最大字符
  let maxLen = 0
  // 缓存各字符的最近坐标
  const sMap = {}
  // 右指针跟着遍历走
  for (let right = 0; right < s.length; right++) {
    // 当没有重复时
    if (sMap[s[right]] === undefined) {
      sMap[s[right]] = right
    }
    // 当重复时
    // 保存当前已经历的最长字符
    // 更新左指针到当前的重复点
    // 让右指针继续前进
    else {
      const curMaxLen = right - 1 - left + 1
      maxLen = Math.max(curMaxLen, maxLen)
      left = right
    }
  }

  return maxLen
}

let s = 'au'
const res = lengthOfLongestSubstring(s)
console.log(res)
