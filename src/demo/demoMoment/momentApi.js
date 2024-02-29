/*
 * @Author: zd
 * @Date: 2022-11-09 13:26:33
 * @LastEditors: zd
 * @LastEditTime: 2022-11-09 13:46:27
 * @Description: moment接口测试
 */

const moment = require('moment')

const x = moment()
  .hour(16)
  .minute(30)
const y = moment()
  .hour(17)
  .minute(00)

const duration = x.diff(y, 'minutes')

console.log(x, y, duration)
