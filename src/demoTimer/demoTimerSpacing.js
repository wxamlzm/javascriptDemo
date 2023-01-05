/*
 * @Author: zd
 * @Date: 2022-11-03 15:55:34
 * @LastEditors: zd
 * @LastEditTime: 2022-11-04 09:25:10
 * @Description: 做一个可以自己更新间隔时间的定时器尝试
 */
const moment = require('moment')

let timer = null
let timerHour = null
let timerhalfHour = null
let timerMin = null
let counter = 0

const setTimer = () => {
  timerMin = setInterval(() => console.log('min'), 60000)
}

// 一小时定时器
const setTimerHour = () => {
  timerHour = setInterval(() => {
    const nowHour = moment().format('HH')
    if (nowHour === 15) {
      // 15点改为半小时一次
      clearInterval(timerHour)
      setTimerHalfHour()
    }
    console.log('hour')
  }, 3600000)
}

// 半小时定时器
const setTimerHalfHour = () => {
  timerHalfHour = setInterval(() => {
    const nowHour = moment.format('HH')
    if (nowHour === 16) {
      // 16点改为1分钟一次
      clearInterval(timerHalfHour)
      setTimer
    }
    console.log('halfHour')
  }, 1800000)
}

setTimerHour()
