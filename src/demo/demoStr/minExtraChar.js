// 给你一个下标从 0 开始的字符串 s 和一个单词字典 dictionary 。你需要将 s 分割成若干个 互不重叠 的子字符串，每个子字符串都在 dictionary 中出现过。s 中可能会有一些 额外的字符 不在任何子字符串中。
// 请你采取最优策略分割 s ，使剩下的字符最少 。

/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
const minExtraChar = (s, dictionary) => {
  // dp[i] 表示到 s[0]...s[i] 的字符串采取最优策略分割方案，剩下的字符数。
  const dp = new Array(s.length + 1).fill(0)
  for (let i = 0; i < s.length; i++) {
    const cur = s.slice(0, i + 1)
    // 默认是在 s[0]...s[i - 1] 的基础上增加 s[i]
    dp[i + 1] = dp[i] + 1
    for (const word of dictionary) {
      // 如果存在满足情况的单词，取最优解
      if (cur.endsWith(word)) {
        dp[i + 1] = Math.min(dp[i + 1], dp[i - word.length + 1])
      }
    }
  }
  console.log(dp)
  return dp[s.length]
}

minExtraChar('leetscode', ['leet', 'code', 'leetcode'])
