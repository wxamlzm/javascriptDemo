// 给你一个下标从 0 开始的字符串 word ，长度为 n ，由从 0 到 9 的数字组成。另给你一个正整数 m 。

// word 的 可整除数组 div  是一个长度为 n 的整数数组，并满足：

// 如果 word[0,...,i] 所表示的 数值 能被 m 整除，div[i] = 1
// 否则，div[i] = 0
// 返回 word 的可整除数组。

/**
 * @param {string} word
 * @param {number} m
 * @return {number[]}
 */
var divisibilityArray = function (word, m) {
  let str = ''
  let arr = []
  for (let i = 0; i < word.length; i++) {
    str += word[i]
    let largeNumber = BigInt(str)
    if (largeNumber % BigInt(m) === BigInt(0)) {
      arr.push(1)
    } else {
      arr.push(0)
    }
  }
  return arr
}

let word = '99824435',
  m = 3
const res = divisibilityArray(word, m)
console.log(res)
