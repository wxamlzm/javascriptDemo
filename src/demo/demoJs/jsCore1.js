/*
 * @Author: zd
 * @Date: 2023-01-05 14:20:03
 * @LastEditors: zd
 * @LastEditTime: 2023-01-05 14:27:50
 * @Description: js，从上到下从左到右运行
 */

let i = 0

function x () {
  i++
  return 10
}

i += x()
// i = i + x()

console.log(i)
