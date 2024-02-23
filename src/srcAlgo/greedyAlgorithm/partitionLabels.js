// 给你一个字符串 s 。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。

// 注意，划分结果需要满足：将所有划分结果按顺序连接，得到的字符串仍然是 s 。

// 返回一个表示每个字符串片段的长度的列表。

/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const last = new Array(26)
  const length = s.length
  const codePointA = 'a'.codePointAt(0)
  for (let i = 0; i < length; i++) {
    last[s.codePointAt(i) - codePointA] = i
  }
  const partition = []
  let start = 0,
    end = 0
  for (let i = 0; i < length; i++) {
    end = Math.max(end, last[s.codePointAt(i) - codePointA])
    if (i == end) {
      partition.push(end - start + 1)
      start = end + 1
    }
  }
  return partition
}
