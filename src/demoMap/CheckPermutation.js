// 给定两个由小写字母组成的字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function (s1, s2) {
  const getMap = s => {
    const sMap = new Map()
    const sLen = s.length
    for (let i = 0; i < sLen; i++) {
      const sCount = sMap.get(s[i])
      if (sCount) {
        sMap.set(s[i], sCount + 1)
      } else {
        sMap.set(s[i], 1)
      }
    }
    return sMap
  }
  // 还是哈希
  const s1Map = getMap(s1)
  const s2Map = getMap(s2)
  if (s1Map.size !== s2Map.size) return false

  let ans = true

  s1Map.forEach((value, key) => {
    if (key === 'c') {
      console.log(1)
    }
    if (s1Map.get(key) !== s2Map.get(key)) {
      ans = false
    }
  })

  return ans
}

let s1 = 'abc',
  s2 = 'bad'

CheckPermutation(s1, s2)
