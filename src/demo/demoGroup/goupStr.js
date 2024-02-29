/*
 * @Author: zd
 * @Date: 2024-01-04 16:00:23
 * @LastEditors: zd
 * @LastEditTime: 2024-01-05 13:39:33
 * @Description:
 */
// 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
// 字母异位词 是由重新排列源单词的所有字母得到的一个新单词。
// 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]

function groupAnagrams (strs) {
  if (!strs.length) return []
  let map = {}

  for (let str of strs) {
    let sortedStr = str.split('').sort().join('')
    if (!map[sortedStr]) {
      map[sortedStr] = [str]
    } else {
      map[sortedStr].push(str)
    }
  }

  return Object.values(map)
}

const res = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])
console.log(res)
