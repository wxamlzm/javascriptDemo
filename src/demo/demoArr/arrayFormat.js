/*
 * @Author: zd
 * @Date: 2022-11-14 08:55:19
 * @LastEditors: zd
 * @LastEditTime: 2022-11-14 08:58:57
 * @Description: 测试arr的几种格式化
 */

function makeMap (str, expectsLowerCase) {
  var map = Object.create(null)
  var list = str.split(',')
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true
  }
  return expectsLowerCase
    ? function (val) {
        return map[val.toLowerCase()]
      }
    : function (val) {
        return map[val]
      }
}

const res = makeMap('slot,component', true)

console.log(res('name'))
