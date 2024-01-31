// 对于字符串 s 和 t，只有在 s = t + ... + t（t 自身连接 1 次或多次）时，我们才认定 “t 能除尽 s”。

// 给定两个字符串 str1 和 str2 。返回 最长字符串 x，要求满足 x 能除尽 str1 且 x 能除尽 str2 。

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return ''
  const gcd = (a, b) => (0 === b ? a : gcd(b, a % b))
  return str1.substring(0, gcd(str1.length, str2.length))
}

let str1 = 'ABCABC',
  str2 = 'ABC'

gcdOfStrings(str1, str2)


// 看到标题里面有最大公因子这个词，于是先默写一下 gcd 算法

// const gcd = (a, b) => (0 === b ? a : gcd(b, a % b))

// 总有一种好像顺手就能用上的感觉呢。

// 其实看起来两个字符串之间能有这种神奇的关系是挺不容易的，我们希望能够找到一个简单的办法识别是否有解。

// 如果它们有公因子 abc，那么 str1 就是 mmm 个 abc 的重复，str2 是 nnn 个 abc 的重复，连起来就是 m+nm+nm+n 个 abc，好像 m+nm+nm+n 个 abc 跟 n+mn+mn+m 个 abc 是一样的。

// 所以如果 str1 + str2 === str2 + str1 就意味着有解。

// 我们也很容易想到 str1 + str2 !== str2 + str1 也是无解的充要条件。

// 当确定有解的情况下，最优解是长度为 gcd(str1.length, str2.length) 的字符串。

// 这个理论最优长度是不是每次都能达到呢？是的。

// 因为如果能循环以它的约数为长度的字符串，自然也能够循环以它为长度的字符串，所以这个理论长度就是我们要找的最优解。

// 把刚刚写的那些拼起来就是解法了。

