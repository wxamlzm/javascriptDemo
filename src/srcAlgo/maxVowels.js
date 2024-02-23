// 给你字符串 s 和整数 k 。

// 请返回字符串 s 中长度为 k 的单个子字符串中可能包含的最大元音字母数。

// 英文中的 元音字母 为（a, e, i, o, u）。

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  const yuanArr = ['a', 'e', 'i', 'o', 'u']
  // 1. 取K长度的字符串
  // 2. 获取所有k长度子字符串中

  let sArr = s.split('')
  let n = sArr.length

  let maxCount = 0
  for (let right = k - 1; right < n; right++) {
    let count = 0
    for (let left = right - k + 1; left <= right; left++) {
      if (yuanArr.find(ele => ele === sArr[left])) {
        count++
        maxCount = Math.max(maxCount, count)
      }
    }
  }
  return maxCount
}

let s = 'weallloveyou',
  k = 7

const res = maxVowels(s, k)
console.log(res)
