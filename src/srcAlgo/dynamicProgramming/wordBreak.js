// 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。如果可以利用字典中出现的一个或多个单词拼接出 s 则返回 true。
// 注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const wordSet = new Set(wordDict)
  const len = s.length
  const dp = new Array(len + 1).fill(false)
  dp[0] = true

  for (let i = 1; i <= len; i++) {
    for (let j = i - 1; j >= 0; j--) {
      // j去划分成两部分
      const suffix = s.slice(j, i) // 后缀部分 s[j: i-1]
      if (wordSet.has(suffix) && dp[j]) {
        // 后缀部分是单词，且左侧子串[0,j-1]的dp[j]为真
        dp[i] = true
        break // dp[i] = true了，i长度的子串已经可以拆成单词了，不需要j继续划分子串了
      }
    }
  }
  return dp[len]
}

let s = 'leetcode'
let wordDict = ['leet', 'code']

wordBreak(s, wordDict)
