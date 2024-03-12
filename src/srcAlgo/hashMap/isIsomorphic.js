/*
   题目的要求
*/
// 给定两个字符串 s 和 t ，判断它们是否是同构的。

/*
  题目对同构的定义
*/
// 如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。

/*
 题目对映射的定义？
*/
// 每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  // 如果按顺序一一对应，那么就符合，否则就不符合
  const s2tMap = {}
  const t2sMap = {}

  for (let i = 0; i < s.length; i++) {
    const a = s[i]
    const b = t[i]

    if ((s2tMap[a] || t2sMap[b]) && (s2tMap[a] !== b || t2sMap[b] !== a)) {
      return false
    }

    s2tMap[a] = b
    t2sMap[b] = a
  }

  return true
}

let s = 'foo',
  t = 'bar'
const res = isIsomorphic(s, t)
console.log(res)
