// 给你一个字符串数组 words 和一个字符 separator ，请你按 separator 拆分 words 中的每个字符串。
// 返回一个由拆分后的新字符串组成的字符串数组，不包括空字符串 。

/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function (words, separator) {
  let newWordsArray = []
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    if (word.includes(separator)) {
      const newWordArray = word.split(separator).filter(ele => ele !== '')
      newWordsArray = newWordsArray.concat(newWordArray)
    } else {
      newWordsArray.push(word)
    }
  }
  return newWordsArray
}

const words = ['one.two.three', 'four.five', 'six']
const separator = '.'

splitWordsBySeparator(words, separator)
