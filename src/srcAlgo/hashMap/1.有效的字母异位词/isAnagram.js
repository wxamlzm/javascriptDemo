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


// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

// 两个字符串是字母异位词,需要满足以下特征:

// 包含相同种类的字母:两个字符串包含的字母种类是完全相同的。

// 字母出现的频次相同:两个字符串中每个字母出现的次数是相同的。

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function (s, t) {
//   if (s.length !== t.length) return false

//   function getStrMap (str) {
//     const strMap = {}
//     for (let i = 0; i < str.length; i++) {
//       if (strMap[str[i]]) {
//         strMap[str[i]]++
//       } else {
//         strMap[str[i]] = 1
//       }
//     }
//     return strMap
//   }

//   const sMap = getStrMap(s)
//   const tMap = getStrMap(t)

//   for (const key in sMap) {
//     const sMapCount = sMap[key]
//     const tMapCount = tMap[key]

//     if (sMapCount !== tMapCount) {
//       return false
//     }
//   }

//   return true
// }

// const s = 'rat'
// const t = 'car'
// const res = isAnagram(s, t)
// console.log(res)

