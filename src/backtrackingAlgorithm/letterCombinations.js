// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits == '') return []
  let dpResult = []
  let len = digits.length
  let inputMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  for (let i = 0, len = digits.length; i < len; i++) {
    dpResult[i] = []
    let str = inputMap[digits[i]]
    for (let j = 0, lenj = str.length; j < lenj; j++) {
      if (i == 0) {
        dpResult[i].push(str[j])
      } else {
        for (let k = 0, lenk = dpResult[i - 1].length; k < lenk; k++) {
          dpResult[i].push(dpResult[i - 1][k] + str[j])
        }
      }
    }
  }
  return dpResult[len - 1]
}

let digits = '23'
letterCombinations(digits)
