/*
 * @Author: zd
 * @Date: 2023-11-30 15:41:10
 * @LastEditors: zd
 * @LastEditTime: 2023-11-30 16:01:34
 * @Description: 探究toFixed这个函数到底怎么取舍的，mdn上的翻译和多数帖子都是错的
 */
function isNull (obj) {
  if (
    obj == null ||
    typeof obj === 'undefined' ||
    obj.toString() === '' ||
    obj.toString() === 'null' ||
    obj.toString() === 'NaN' ||
    obj.toString() === 'undefined'
  ) {
    return true
  }
  return false
}

function formatNum1 (num, dp) {
  if (isNull(num)) {
    return ''
  }
  // 乱输入直接返回原始数据
  if (isNaN(num)) {
    return num
  }
  num = Number(num)
  // 先根据小数位四舍五入处理传入数字
  if (!isNull(dp)) {
    const integer = num.toString().split('.')[0]
    let decimal = num.toString().split('.')[1]
    // 这个补1虽然解决了问题，但看起来毫无道理
    if (!isNull(decimal) && decimal.length >= Number(dp) + 1) {
      decimal = decimal.substring(0, Number(dp) + 1)
      decimal = decimal + '1'
      num = Number(integer + '.' + decimal)
    }
    num = Number(Number(num + '').toFixed(dp))
  }
  let numStr = Math.abs(parseInt(num + '')).toString()
  let result = ''
  // 处理整数
  while (numStr.length > 3) {
    result = ',' + numStr.slice(-3) + result
    numStr = numStr.slice(0, numStr.length - 3)
  }
  if (numStr) {
    result = numStr + result
  }
  if (num < 0) {
    result = '-' + result
  }
  if (isNull(dp)) {
    // 保留原有小数
    const decimal = num.toString().split('.')[1]
    !isNull(decimal) && (result += '.' + decimal)
    return result
  }
  if (dp === 0) {
    return result
  }
  // 处理小数
  return result + '.' + num.toFixed(dp).toString().split('.')[1]
}

function formatNum2 (num, dp) {
  if (isNull(num)) {
    return ''
  }
  // 乱输入直接返回原始数据
  if (isNaN(num)) {
    return num
  }
  num = Number(num)
  // 先根据小数位四舍五入处理传入数字
  if (!isNull(dp)) {
    num = Number(Number(num + '').toFixed(dp))
  }
  let numStr = Math.abs(parseInt(num + '')).toString()
  let result = ''
  // 处理整数
  while (numStr.length > 3) {
    result = ',' + numStr.slice(-3) + result
    numStr = numStr.slice(0, numStr.length - 3)
  }
  if (numStr) {
    result = numStr + result
  }
  if (num < 0) {
    result = '-' + result
  }
  if (isNull(dp)) {
    // 保留原有小数
    const decimal = num.toString().split('.')[1]
    !isNull(decimal) && (result += '.' + decimal)
    return result
  }
  if (dp === 0) {
    return result
  }
  // 处理小数
  return result + '.' + num.toFixed(dp).toString().split('.')[1]
}

// 起因是toFixed发现不是四舍五入的，然后又发现上面的函数1是可以四舍五入，但函数2不行，那问题更严重了

const testNum = 43978.905

console.log(formatNum1(testNum, 2)) // 43,978.91
console.log(formatNum2(testNum, 2)) // 43,978.90
