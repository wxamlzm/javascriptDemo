/*
 * @Author: zd
 * @Date: 2023-01-04 09:18:21
 * @LastEditors: zd
 * @LastEditTime: 2023-01-04 13:16:42
 * @Description: toLocaleString()的金额格式化测试，有兼容性问题，慎用
 */

const num1 = 12345678.6789
// 默认保留3位小数
console.log(num1.toLocaleString())

const num2 = 123456.6789
// 可选择保留小数位
console.log(num2.toLocaleString(undefined, { minimumFractionDigits: 6 }))

const num3 = 0.1245
// 保留为百分比格式
console.log(
  num3.toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
)

// 配置自定义单位失败
// const num4 = 12.45
// console.log(num4.toLocaleString(undefined, { style: 'unit', unit: '克/元' }))

// 阿拉伯数字转中文
const num5 = 12345678.123
console.log(num5.toLocaleString('zh'))
