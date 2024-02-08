// 字符串压缩。利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。
// 比如，字符串aabcccccaaa会变为a2b1c5a3。
// 若“压缩”后的字符串没有变短，则返回原先的字符串。你可以假设字符串中只包含大小写英文字母（a至z）。

/**
 * @param {string} S
 * @return {string}
 */
// 第一思路，可以求出来后比较长短，然后返回短的
var compressString = function (S) {
  let sCompressString = ''
  let count = 1
  let left = 0
  let word = S[left]

  while (left + count < S.length) {
    // 因为放在count++后，会出现left + count 对应的并不是curWord的现象
    // 即count++后需要重新进行条件判断
    // 我认为left+count是S得下标，S的下标理所当然到S.length-1为止

    const curWord = S[left + count]
    if (word === curWord) {
      count++
    } else {
      // 拼接
      sCompressString += word
      sCompressString += count
      // 转换
      word = curWord
      left = left + count
      count = 1
    }
    // 问题的核心还是在于，这个等式的时候，在当前例子下，count == 2才是正确的，但等式成立的条件却是count == 1
    if (left + count === S.length - 1) {
      // 拼接末尾
      sCompressString += word
      sCompressString += count
    }
  }

  if (sCompressString.length < S.length) {
    return sCompressString
  } else {
    return S
  }
}

let S = 'aabcccccaa'

compressString(S)
