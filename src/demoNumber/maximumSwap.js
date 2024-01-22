// 给定一个非负整数，你至多可以交换一次数字中的任意两位。返回你能得到的最大值

const swap = (charArray, i, j) => {
  const temp = charArray[i]
  charArray[i] = charArray[j]
  charArray[j] = temp
}

/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  const charArray = [...('' + num)]
  const n = charArray.length
  let maxIdx = n - 1
  let idx1 = -1,
    idx2 = -1
  for (let i = n - 1; i >= 0; i--) {
    if (charArray[i] > charArray[maxIdx]) {
      maxIdx = i
    } else if (charArray[i] < charArray[maxIdx]) {
      idx1 = i
      idx2 = maxIdx
    }
  }
  if (idx1 >= 0) {
    swap(charArray, idx1, idx2)
    return parseInt(charArray.join(''))
  } else {
    return num
  }
}

const num = 9973
const res = maximumSwap(num)
console.log(res)
