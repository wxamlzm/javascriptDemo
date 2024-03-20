// 给定一个经过编码的字符串，返回它解码后的字符串。

// 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

// 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

// 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  //   不会，抄的
  let numStack = []
  let strStack = []
  let ans = ''
  let count = 0
  for (let i = 0; i < s.length; i++) {
    let c = s[i]
    // 是数字
    if (!isNaN(c)) {
      count = count * 10 + parseInt(c)
    } else if (c === '[') {
      strStack.push(ans)
      ans = ''
      numStack.push(count)
      count = 0
    } else if (c === ']') {
      const times = numStack.pop()
      ans = strStack.pop() + ans.repeat(times)
    } else {
      ans += c
    }
  }
  return ans
}

function isEnglishLetter (char) {
  return /^[a-zA-Z]$/.test(char)
}

let s = '3[a]2[bc]'
const res = decodeString(s)
console.log(res)
