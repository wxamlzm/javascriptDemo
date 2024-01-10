// 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
// 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const wordLength = p.length
  const strLength = s.length
  // 字符串s中找到字符p的所有的异位词
  let left = 0
  let right = left + wordLength
  //
  const array = []
  const sortTargetWord = p.split('').sort().join('')
  while (right <= strLength) {
    const curWord = s.slice(left, right).split('').sort().join('')
    console.log(curWord)
    if (curWord === sortTargetWord) {
      array.push(left)
    }

    left++
    right++
  }
  return array
}

const s = 'abab'
const p = 'ab'

const arr = findAnagrams(s, p)
console.log(arr)
