// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

//     左括号必须用相同类型的右括号闭合。
//     左括号必须以正确的顺序闭合。
//     每个右括号都有一个对应的相同类型的左括号。

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 转成数组，方便遍历压栈
  const sArr = s.split('')
  // 碰到一个问题，就是怎么做配对的识别
  // 首先用map试试
  const bracketsMap = new Map()
  bracketsMap.set('(', ')')
  bracketsMap.set('[', ']')
  bracketsMap.set('{', '}')

  // 奇数肯定不满足条件？
  if (sArr.length % 2 !== 0) return false

  // 新建栈
  const bracketsStack = []
  // 就单次实例而言是固定长度的遍历，选用for
  // 遍历字符串数组进行栈操作

  for (let i = 0; i < sArr.length; i++) {
    // 获取栈顶元素
    const stackTop = bracketsStack[bracketsStack.length - 1]
    // 获取和栈顶左括号对应的右括号
    bracketsRight = bracketsMap.get(stackTop)
    // 如果是和栈顶对应的右括号，则出栈
    if (bracketsRight === sArr[i]) {
      // 从栈顶即数组末尾删除一个
      bracketsStack.pop()
    } else {
      bracketsStack.push(sArr[i])
    }
  }
  // 为空则全部出栈即配对成功，否则失败
  return bracketsStack.length === 0
}

let s = '[({})]'

// const res = isValid(s)
// console.log(res)
// PS，结果这个思路就是官方思路

// 偷懒的做法，可以拿来应付面试题
function isValid2 (s) {
  while (s.includes('()') || s.includes('{}') || s.includes('[]')) {
    s = s.replace('()', '').replace('{}', '').replace('[]', '')
  }

  return s.length === 0
}
const res2 = isValid2(s)
console.log(res2)