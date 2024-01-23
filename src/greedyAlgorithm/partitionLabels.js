// 给你一个字符串 s 。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。

// 注意，划分结果需要满足：将所有划分结果按顺序连接，得到的字符串仍然是 s 。

// 返回一个表示每个字符串片段的长度的列表。

/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  let strMap = []
  for (let i = 0; i < s.length; i++) {
    const curIndex = strMap.findIndex(ele => ele.word === s[i])

    if (curIndex === -1) {
      strMap.push({ word: s[i], startIndex: i, endIndex: i })
    } else {
      strMap[curIndex].endIndex = i
    }
  }
  strMap.sort((a, b) => a.startIndex - b.startIndex)
  console.log(strMap)

  const answer = []
  let startIndex = 0
  let endIndex = strMap[1].endIndex
  for (let i = 0; i < strMap.length; i++) {
    if (strMap[i].startIndex < endIndex) {
      endIndex = Math.max(strMap[i].endIndex, endIndex)
    }

    if (strMap[i].startIndex > endIndex || i === strMap.length - 1) {
      let len = endIndex - startIndex + 1
      answer.push(len)
      startIndex = strMap[i].startIndex
      endIndex = strMap[i].endIndex
    }
  }
  return answer
}

const s = 'caedbdedda'
partitionLabels(s)
