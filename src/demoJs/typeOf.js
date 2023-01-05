/*
 * @Author: zd
 * @Date: 2022-11-21 09:24:14
 * @LastEditors: zd
 * @LastEditTime: 2022-11-21 09:34:36
 * @Description: 
 */
const typeOf = {
  1: typeof x,
  2: typeof undefined,
  3: typeof null,
  4: typeof true,
  5: typeof NaN,
  6: typeof 'sherlock',
  7: typeof (() => {}),
  8: typeof {},
  9: typeof new RegExp
}

console.log(typeOf)
