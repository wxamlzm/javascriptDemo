/*
 * @Author: zd
 * @Date: 2024-01-04 16:00:23
 * @LastEditors: zd
 * @LastEditTime: 2024-01-04 16:49:18
 * @Description:
 */
// 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
// 字母异位词 是由重新排列源单词的所有字母得到的一个新单词。
// 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]

const sameArray = (arr1, arr2) => {
  arr1.forEach(ele => {
    if (arr2.includes(ele) === false) {
      return false
    }
  })
  return true
}

const groupAnagrams = strArray => {
  // 1. 遍历输入的数组，按题设，会都是字符串
  const array = []
  for (var i = 0; i < strArray.length; i++) {
    const subArray = [strArray[i]]
    const sourceStrArray = strArray[i].split('')
    for (var j = i + 1; j < strArray.length; j++) {
      const targetStrArray = strArray[j].split('')
      if (sameArray(sourceStrArray, targetStrArray)) {
        subArray.push(strArray[j])
      }
    }
    array.push(subArray)
  }
  return array
}

const res = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])
console.log(res)
