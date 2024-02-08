// 给定一个字符串，编写一个函数判定其是否为某个回文串的排列之一。

// 回文串是指正反两个方向都一样的单词或短语。排列是指字母的重新排列。

// 回文串不一定是字典当中的单词。

var canPermutePalindrome = function (s) {
  // counter是一个字典，key对应字母，value对应字母的出现次数
  let counter = {}

  // 开始遍历字符串，收集每个字符的出现次数
  for (let i = 0; i < s.length; i++) {
    counter[s[i]] = counter[s[i]] ? counter[s[i]] + 1 : 1
  }

  // 判断字符串是否只有一个字母组成，如果只有一个，那么直接返回true
  if (Object.keys(counter).length === 1) return true

  // 记录字符串中的字母出现的次数为奇数的个数
  let odd = 0
  for (const key in counter) {
    if (counter[key] % 2 != 0) {
      odd++
    }
  }

  // 如果字母出现次数为奇数的个数不等于1或者0，那么完蛋，组成不了回文。反之则可以
  if (odd > 1) {
    return false
  } else {
    return true
  }
}
