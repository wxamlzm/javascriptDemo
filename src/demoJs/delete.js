/*
 * @Author: zd
 * @Date: 2022-11-21 09:49:08
 * @LastEditors: zd
 * @LastEditTime: 2022-11-21 10:25:36
 * @Description:
 */
const o = { x: 1, y: 2 }
console.log(delete o.xb)
console.log('x' in o)

var a = [1, 2, 3]
delete a[2]
console.log(2 in a)

