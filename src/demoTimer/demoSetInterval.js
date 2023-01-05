/*
 * @Author: zd
 * @Date: 2022-11-07 10:13:03
 * @LastEditors: zd
 * @LastEditTime: 2022-11-07 10:42:25
 * @Description: setInterval的不准测试
 */

// 首先setInterval是不准的验证
const startTime = new Date().getTime()
let count = 0
// 耗时任务
setInterval(() => {
  let i = 0
  while (i++ < 10000000) {}
}, 0)

setInterval(() => {
  count++
  // 这里会显示
  console.log(new Date().getTime() - (startTime + count * 1000))
}, 1000)
