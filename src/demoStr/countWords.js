// 给你两个字符串数组 words1 和 words2 ，
// 请你返回在两个字符串数组中 都恰好出现一次的字符串的数目。

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
  const words1Map = {}
  const words2Map = {}

  words1.forEach(word1 => {
    if (words1Map[word1]) {
      words1Map[word1] += 1
    } else {
      words1Map[word1] = 1
    }
  })

  words2.forEach(word2 => {
    if (words2Map[word2]) {
      words2Map[word2] += 1
    } else {
      words2Map[word2] = 1
    }
  })

  let count = 0
  for (const key in words1Map) {
    if (words1Map[key] === 1 && words2Map[key] === 1) count++
  }
  return count
}

let words1 = ['a', 'ab']
let words2 = ['a', 'a', 'a', 'ab']

const count = countWords(words1, words2)
console.log(count)
