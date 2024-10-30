/**
 * 判断字符串中的括号是否合法配对
 * @param {string} s 只包含 '('，')'，'{'，'}'，'['，']' 的字符串
 * @return {boolean} 括号是否合法配对
 *
 * 要求：
 * 1. 左括号必须用相同类型的右括号闭合
 * 2. 左括号必须以正确的顺序闭合
 * 3. 每个右括号都有一个对应的相同类型的左括号
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 建立括号对应关系映射
  const bracketPairs = new Map()
  bracketPairs.set('[', ']')
  bracketPairs.set('(', ')')
  bracketPairs.set('{', '}')

  // 使用栈存储待匹配的左括号
  const leftBrackets = []

  for (let bracket of s) {
    if (bracketPairs.has(bracket)) {
      // 如果是左括号，入栈等待匹配
      leftBrackets.push(bracket)
    } else {
      // 这是仅有右括号的情况
      // 如果栈为空，说明右括号无法找到匹配的左括号
      if (leftBrackets.length === 0) return false

      // 去除最近的左括号进行匹配
      const lastLeftBracket = leftBrackets.pop()
      const expectedRightBracket = bracketPairs.get(lastLeftBracket)
      if (expectedRightBracket !== bracket) {
        return false
      }
    }
  }

  // 所有括号都应该完成匹配，栈应该为空
  return leftBrackets.length === 0
}

const isValid2 = function (s) {
  // 建议一个映射关系方便匹配
  const bracketPairs = {
    '{': '}',
    '[': ']',
    '(': ')'
  }

  const leftBrackets = []
  for (let char of s) {
    if (char in bracketPairs) {
      // 左括号压入
      leftBrackets.push(char)
    } else {
      // 没有前置左括号不符合题意
      if (leftBrackets.length === 0) return false
      // 栈顶左括号对应的右括号
      const expectedRightBracket =
        bracketPairs[leftBrackets[leftBrackets.length - 1]]
      if (expectedRightBracket !== char) {
        return false
      } else {
        leftBrackets.pop()
      }
    }
  }

  return leftBrackets.length === 0
}

let s = '()'

const res = isValid2(s)
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
