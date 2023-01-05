/*
 * @Author: zd
 * @Date: 2023-01-04 15:19:16
 * @LastEditors: zd
 * @LastEditTime: 2023-01-04 16:46:26
 * @Description: 测试promise.all的作用的demo
 */

// 返回一个在经过delay时间后有resolve的promise
function resolveTimeout (value, delay) {
  return new Promise(resolve => setTimeout(() => resolve(value), delay))
}

// 返回一个在经过delay时间后有reject的promise
function rejectTimeout (reason, delay) {
  return new Promise((resolve, reject) =>
    setTimeout(() => reject(reason), delay)
  )
}

const fruites = ['potatoes', 'tomatoes']
const vegetables = ['oranges', 'apples']

// 
const allPromise = [
  resolveTimeout(fruites, 2000),
  resolveTimeout(vegetables, 1000)
]

const promise = Promise.all(allPromise)

const list = async () => {
  try {
    const result = await promise
    console.log(result)
  } catch (error) {
    console.log(error.errors)
  }
}

list()