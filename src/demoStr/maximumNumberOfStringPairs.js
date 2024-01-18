// 2744. 最大字符串配对数目
// 给你一个下标从 0 开始的数组 words ，数组中包含 互不相同 的字符串。
// 如果字符串 words[i] 与字符串 words[j] 满足以下条件，我们称它们可以匹配：
//     字符串 words[i] 等于 words[j] 的反转字符串。
//     0 <= i < j < words.length
// 请你返回数组 words 中的 最大 匹配数目。
// 注意，每个字符串最多匹配一次。

/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
  const wordsMap = {}
  const wordsArr = []
  for (let i = 0; i < words.length; i++) {
    const sortedWord = words[i].split('').sort().join('')
    if (wordsMap[sortedWord]) {
      wordsArr.push(sortedWord)
    } else {
      wordsMap[sortedWord] = 1
    }
  }
  return wordsArr.length
}

const words = ["ab","ba","cc"]
const res = maximumNumberOfStringPairs(words)
console.log(res)
