// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const sObj = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  const stack = []

  for (let char of s) {
    // let of
    if (char in sObj) {
      stack.push(char)
    } else {
      if (stack.length === 0) return false
      const stackTop = stack.pop()
      const expectedRightBracket = sObj[stackTop]
      if (expectedRightBracket !== char) {
        return false
      }
    }
  }
  return stack.length === 0
}

let s = ']'

const res = isValid(s)
console.log(res)
// PS，结果这个思路就是官方思路

// 偷懒的做法，可以拿来应付面试题
// function isValid2 (s) {
//   while (s.includes('()') || s.includes('{}') || s.includes('[]')) {
//     s = s.replace('()', '').replace('{}', '').replace('[]', '')
//   }

//   return s.length === 0
// }
// const res2 = isValid2(s)
// console.log(res2)
