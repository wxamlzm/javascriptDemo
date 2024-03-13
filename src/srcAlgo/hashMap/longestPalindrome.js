// 给定一个包含大写字母和小写字母的字符串 s ，返回 通过这些字母构造成的 最长的回文串 。
// 在构造过程中，请注意 区分大小写 。比如 "Aa" 不能当做一个回文字符串。

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  // 「回文串」是指倒序后和自身完全相同的字符串，即具有关于中心轴对称的性质。观察发现
  const sMap = {}
  for (let i = 0; i < s.length; i++) {
    if (sMap[s[i]]) {
      sMap[s[i]] += 1
    } else {
      sMap[s[i]] = 1
    }
  }
  // console.log(sMap)
  // 只有一个字母的时候？
  // if (Object.keys(sMap).length === 1) {
  //   return s.length
  // }

  const valueArr = Object.values(sMap)
  let len = 0
  let odd = 0
  for (let j = 0; j < valueArr.length; j++) {
    const rem = valueArr[j] % 2
    if (rem === 0) {
      len += valueArr[j]
    }
    if (rem !== 0) {
      len += valueArr[j] - 1
      odd = 1
    }
  }

  len += odd

  return len
}

const s = 'bananas'
const res = longestPalindrome(s)
console.log(res)
