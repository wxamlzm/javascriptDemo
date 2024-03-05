// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

// 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const getMap = str => {
    const sMap = new Map()
    for (let i = 0; i < str.length; i++) {
      if (sMap.has(str[i]) === false) {
        sMap.set(str[i], 1)
      } else {
        const count = sMap.get(str[i])
        sMap.set(str[i], count + 1)
      }
    }
    return sMap
  }
  const sMap = getMap(s)
  const tMap = getMap(t)

  if (sMap.size !== tMap.size) return false

  let isAnagram = true
  sMap.forEach((value, key, map) => {
    if (tMap.get(key) !== value) {
      isAnagram = false
    }
  })
  return isAnagram
}

let s = 'anagram',
  t = 'nagaram'
const res = isAnagram(s, t)
console.log(res)
