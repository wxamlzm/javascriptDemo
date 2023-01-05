/*
 * @Author: zd
 * @Date: 2022-11-07 16:06:41
 * @LastEditors: zd
 * @LastEditTime: 2022-11-07 16:25:11
 * @Description: 用reduce来取最大值和最小值
 */
const arrDate = [
  20220104,
  20220105,
  20220106,
  20220107,
  20220110,
  20220111,
  20220112,
  20220113,
  20220114,
  20220117,
  20220118,
  20220119,
  20220120,
  20220121,
  20220124,
  20220125,
  20220126,
  20220127,
  20220128,
  20220207,
  20220208,
  20220209,
  20220210,
  20220211,
  20220214,
  20220215,
  20220216,
  20220217,
  20220218,
  20220221,
  20220222,
  20220223,
  20220224,
  20220225,
  20220228,
  20220701,
  20220704,
  20220705,
  20220706,
  20220707,
  20220708,
  20220711,
  20220712
]
const arrVal = [
  -3738506.76,
  -5021021.99,
  2597896.51,
  2191053.87,
  -134035.72,
  29759828.71,
  2447212.15,
  3250219.62,
  416759.27,
  -4468854.82,
  -3153663.03,
  1211101.67,
  -1438905.47,
  -1189138.47,
  -3702622.14,
  -5511063.72,
  -1908192.05,
  -1912760.37,
  -3614735.79,
  422167,
  2792000.1,
  7404.91,
  1200822.17,
  -54888.91,
  -838916.3,
  -1009827.84,
  575629.25,
  -267917.26,
  -583972.48,
  -11819279.07,
  1376492.69,
  -769178.39,
  -1375429.96,
  2884376.53,
  -5124047.1,
  -1896332.39,
  -4284859.53,
  -4440674.04,
  -1616928.79,
  1682008.44,
  3767642.94,
  -9204036.29,
  2704740.91
]

const arrMax = arrVal.reduce((pre, cur) => Math.min(pre, cur))
console.log(arrMax)

const getArrExtremum = (arr, type) => {
  return arr.reduce((pre, cur) => Math[type](pre, cur))
}
