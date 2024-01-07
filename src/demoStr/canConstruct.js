// 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。
// 如果可以，返回 true ；否则返回 false 。
// magazine 中的每个字符只能在 ransomNote 中使用一次。

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = (ransomNote, magazine) => {
  // 1. magazine 中 拥有 ransomNote的所有字符，并且数量也相等
  // 为ransomNote和magazine各做哈希表，然后作比较是否就可以
  const target = ransomNote.toLocaleLowerCase().split('')
  const source = magazine.toLocaleLowerCase().split('')

  const setArrayMap = array => {
    const map = {}
    array.forEach(ele => {
      if (!map[ele]) {
        map[ele] = 1
      } else {
        map[ele] = map[ele] + 1
      }
    })
    return map
  }

  targetMap = setArrayMap(target)

  sourceMap = setArrayMap(source)

  let res = true
  for (const key in targetMap) {
    if (!sourceMap[key] || sourceMap[key] < targetMap[key]) {
      res = false
    }
  }
  return res
}
