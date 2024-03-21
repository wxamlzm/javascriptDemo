// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。

// 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1Str, num2Str) {
  // 不用bigInteger和第三方库处理大数加法
  // console.log(Number.MAX_SAFE_INTEGER)

  // 想到了遍历，但怎么处理进位问题呢
  const len1 = num1Str.length
  const len2 = num2Str.length

  let baseNumStr = len1 > len2 ? num1Str : num2Str
  let addNumStr = len1 > len2 ? num2Str : num1Str
  // 反向从个位开始进行加法计算
  baseNumStr = baseNumStr.split('').reverse().join('')
  addNumStr = addNumStr.split('').reverse().join('')
  // console.log(baseNumStr, addNumStr)

  // 两数之和
  let sumArr = []
  // 两数当前位置的进位
  let curPosAdd = 0
  for (let i = 0; i < baseNumStr.length; i++) {
    // 对应位相加后
    const baseNumStrPosNum = Number(baseNumStr[i])
    const addNumStrPosNum = Number(addNumStr[i])
    // 注意：运算符的优先级
    const curPosSum = baseNumStrPosNum + (addNumStrPosNum || 0) + curPosAdd
    // 清空进位值
    curPosAdd = 0
    // 判断下一位是否有进位值
    if (curPosSum.toString().length > 1) {
      curPosAdd = 1
    }
    // 注意：num没有length属性
    const curPos = curPosSum.toString().length - 1
    const curPosSumNum = curPosSum.toString()[curPos]
    sumArr.unshift(curPosSumNum)
  }

  if (curPosAdd) {
    sumArr.unshift(curPosAdd)
  }

  return sumArr.join('')
}

const num1 = '1'
const num2 = '9'
const res = addStrings(num1, num2)
console.log(res)
