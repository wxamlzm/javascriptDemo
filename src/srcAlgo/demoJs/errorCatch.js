/*
 * @Author: zd
 * @Date: 2022-11-21 14:40:51
 * @LastEditors: zd
 * @LastEditTime: 2022-11-21 15:15:00
 * @Description: throw 异常处理；Error对象应用；try/catch应用
 */

function factorial (x) {
  if (x < 0) throw new Error('x不能是负数')

  for (var f = 1; x > 1; f *= x, x-- /* empty */) return f
}

try {
  // 通常来说，这里的代码会从头到尾执行，不会产生任何问题
  // 但有事会抛出一个异常，要么是由throw语句直接抛出异常，
  // 要么是通过调用一个方法间接抛出异常
  var n = -1
  var f = factorial(n)
  console.log(`${n}!= ${f}`)
} catch (e) {
  // 当且仅当try语句块抛出了异常，才会执行这里的代码
  // 这里可以通过局部变量e来获得对Error对象或者抛出的其他值的引用
  // 这里的代码块可以基于某种原因处理这个异常，也可以忽略这个异常
  console.error(e)
}
