/*
 * @Author: zd
 * @Date: 2024-01-05 09:36:05
 * @LastEditors: zd
 * @LastEditTime: 2024-01-05 09:44:53
 * @Description: toFixed的四舍五入不准确，手写一个
 */

function preciseRound (num, decimals) {
  const factor = Math.pow(10, decimals)
  const roundedNum = Math.round(num * factor) / factor
  return Number(roundedNum.toFixed(decimals))
}

const numA = 43978.905

const res = preciseRound(numA, 2)

console.log(res)
