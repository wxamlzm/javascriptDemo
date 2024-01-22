// 给定一个非负整数，你至多可以交换一次数字中的任意两位。返回你能得到的最大值

/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  let numArray = num.toString().split('')

  numArray = numArray
    .map((num, index) => {
      return {
        value: num,
        index
      }
    })
    .sort((a, b) => a.value - b.value)

  const length = numArray.length

  maxValue = numArray[length - 1].value
  maxValueIndex = numArray[length - 1].index
  for (let i = 0; i < length - 1; i++) {
    if (numArray[i].value < maxValue && numArray[i].index < maxValueIndex) {
      numArray[length - 1].index = i
      numArray[i].index = maxValueIndex
      break
    }
  }

  numArray.sort((a, b) => a.index - b.index)

  return numArray.map(ele => ele.value).join('')
}

const num = 9973
const res = maximumSwap(num)
console.log(res)
