// 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
// 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let count = p.length,
    result = [],
    left = 0,
    right = 0,
    parray = Array(27)
      .join('0')
      .split('')
      .map(x => parseInt(x)) // 26个0组成的数组

  for (let pc of p) {
    parray[pc.charCodeAt() - 97]++ // parray初始化
  }

  while (right < s.length) {
    if (parray[s[right++].charCodeAt() - 97]-- >= 1) {
      count--
    }

    if (count === 0) result.push(left)

    if (
      right - left === p.length &&
      parray[s[left++].charCodeAt() - 97]++ >= 0
    ) {
      count++
    }
  }
  return result
}
