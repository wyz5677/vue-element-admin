/**
 * @module util-date
 */
import moment from 'moment'

/**
 * 格式化字符串
 * @function formatTime
 * @param {(Object | Number)} date - 日期对象或时间戳
 * @param {String} [formatStr = undefined] - 格式字符串 参考moment库{@link http://momentjs.cn/}
 * @returns {string}  - 格式化后的时间字符串
 * @example
 * import {formatTime} from '@/utils/date'
 * formatTime('MMMM Do YYYY, h:mm:ss a'); // 十月 18日 2018, 2:44:09 下午
 */
export const formatTime = (date, formatStr) => {
  if (date) {
    return moment(date).format(formatStr)
  } else {
    return ''
  }
}
/**
 * 返回年月日格式的日期字符串
 * @function getYMDDate
 * @param {(Object | Number)}  date - 日期对象或时间戳
 * @returns {string} - 形如'YYYY-MM-DD'的日期字符串
 * @example
 * import {getYMDDate} from '@/utils/date'
 * getYMDDate(new Date()) // 2018-10-18
 */
export const getYMDDate = (date) => {
  if (date) {
    return moment(date).format('YYYY-MM-DD')
  } else {
    return
  }
}
/**
 * 返回年月日格式的日期字符串
 * @function getYMDDate1
 * @param {(Object | Number)}  date - 日期对象或时间戳
 * @returns {string} - 形如'YYYY:MM:DD'的日期字符串
 * @example
 * import {getYMDDate1} from '@/utils/date'
 * getYMDDate1(new Date()) // 2018:10:18
 */
export const getYMDDate1 = (date) => {
  if (date) {
    return moment(date).format('YYYY年MM月DD日')
  } else {
    return
  }
}
/**
 * 返回年月日小时分钟秒格式的日期字符串
 * @function getYMDHMSDate
 * @param {(Object | Number)} date - 日期对象或时间戳
 * @returns {string} -  形如'YYYY-MM-DD hh:mm:ss'的日期字符串
 * @example
 * import {getYMDHMSDate} from '@/utils/date'
 * getYMDHMSDate(new Date()) // 2018-10-18 11:30:03
 */
export const getYMDHMSDate = (date) => {
  if (!date) return ''
  return moment(date).format('YYYY-MM-DD HH:mm:ss')
}
/**
 * 返回年月日小时分钟格式的日期字符串
 * @function getYMDHMDate
 * @param {(Object | Number)} date - 日期对象或时间戳
 * @returns {string} -  形如'YYYY-MM-DD hh:mm'的日期字符串
 * @example
 * import {getYMDHMDate} from '@/utils/date'
 * getYMDHMDate(new Date()) // 2018-10-18 11:30
 */
export const getYMDHMDate = (date) => {
  if (!date) return ''
  return moment(date).format('YYYY-MM-DD HH:mm')
}
/**
 * 返回月日小时分钟格式的日期字符串
 * @function getMDHMDate
 * @param {(Object | Number)} date - 日期对象或时间戳
 * @returns {string} -  形如'MM-DD hh:mm'的日期字符串
 * @example
 * import {getMDHMDate} from '@/utils/date'
 * getMDHMDate(new Date()) // 10-18 11:30
 */
export const getMDHMDate = (date) => {
  if (!date) return ''
  return moment(date).format('MM-DD HH:mm')
}
/**
 * 返回年月日小时分钟秒格式的日期字符串
 * @function getYMDHMSDate
 * @param {(Object | Number)} date - 日期对象或时间戳
 * @returns {string} -  形如'YYYY-MM'的日期字符串
 * @example
 * import {getYMDHMSDate} from '@/utils/date'
 * getYMDHMSDate(new Date()) // 2018-10
 */
export const getYMDate = (date) => {
  if (!date) return ''
  return moment(date).format('YYYY-MM')
}
/**
 * 返回年月日小时分钟秒格式的日期字符串
 * @function getYMDHMSDate
 * @param {(Object | Number)} date - 日期对象或时间戳
 * @returns {string} -  形如'YYYY'的日期字符串
 * @example
 * import {getYMDHMSDate} from '@/utils/date'
 * getYMDHMSDate(new Date()) // 2018
 */
export const getYDate = (date) => {
  if (!date) return ''
  return moment(date).format('YYYY')
}
/**
 * 返回小时分钟格式的日期字符串
 * @function getHMDate
 * @param {(Object | Number)} date - 日期对象或时间戳
 * @returns {string} -  形如'hh:mm'的日期字符串
 * @example
 * import {getHMDate} from '@/utils/date'
 * getHMDate(new Date()) // 2018-10-18 11:30
 */
export const getHMDate = (date) => {
  if (!date) return ''
  return moment(date).format('HH:mm')
}
/**
 * 返回小时分钟格式的日期字符串
 * @function getHMSDate
 * @param {(Object | Number)} date - 日期对象或时间戳
 * @returns {string} -  形如'hh:mm:ss'的日期字符串
 * @example
 * import {getHMDate} from '@/utils/date'
 * getHMSDate(new Date()) // 2018-10-18 11:30
 */
export const getHMSDate = (date) => {
  if (!date) return ''
  return moment(date).format('HH:mm:ss')
}
/**
 * 格式化时长
 * @function formatDuration
 * @param {Number} val  - 毫秒值
 * @returns {string} -  形如'1年2月3日5小时8分钟16秒'的日期字符串
 * @example
 * import {formatDuration} from '@/utils/date'
 * formatDuration(30000) // 30秒
 */
export const formatDuration = (val) => {
  const [year, month, day, hour, minute, seconds] = [
    moment.duration(val).years(),
    moment.duration(val).months(),
    moment.duration(val).days(),
    moment.duration(val).hours(),
    moment.duration(val).minutes(),
    moment.duration(val).seconds()
  ]
  const [yearStr, monthStr, dayStr, hourStr, minuteStr, secondsStr] = [
    year ? year + '年' : '',
    month ? month + '月' : '',
    day ? day + '日' : '',
    hour ? hour + '小时' : '',
    minute ? minute + '分钟' : '',
    seconds ? seconds + '秒' : ''
  ]
  const time = yearStr + monthStr + dayStr + hourStr + minuteStr + secondsStr
  return time || '-'
}
// 获取一个月的开始时刻的时间戳
export const getStartOfOneMonth = (date) => {
  if (!date) date = new Date()
  if (!date.getTime) {
    date = new Date(date)
  } else {
    date = new Date(date.getTime())
  }
  date.setMilliseconds(0)
  date.setSeconds(0)
  date.setMinutes(0)
  date.setHours(0)
  date.setDate(1)
  return date.getTime()
}
// 获取一个月的最后时刻的时间戳
export const getEndOfOneMonth = (date) => {
  if (!date) date = new Date()
  if (!date.getTime) {
    date = new Date(date)
  } else {
    date = new Date(date.getTime())
  }
  date.setMilliseconds(999)
  date.setSeconds(59)
  date.setMinutes(59)
  date.setHours(23)
  date.setDate(1)
  date.setMonth(date.getMonth() + 1)
  date.setDate(0)
  if (date.getTime() > new Date().getTime()) {
    return new Date().getTime()
  } else {
    return date.getTime()
  }
}
// 获取往后7天的时间范围
export function getOneWeekRange(date) {
  let [start, end] = ['', '']
  if (!date) date = new Date()
  if (!date.getTime) {
    date = new Date(date)
  } else {
    date = new Date(date.getTime())
  }
  end = date.getTime()
  date.setDate(date.getDate() - 6)
  date.setMilliseconds(0)
  date.setSeconds(0)
  date.setMinutes(0)
  date.setHours(0)
  start = date.getTime()
  return [start, end]
}
// 获取一天的开始时间
export function getStartOfOneDate(date) {
  if (!date) date = new Date()
  if (!date.getTime) {
    date = new Date(date)
  } else {
    date = new Date(date.getTime())
  }
  date.setMilliseconds(0)
  date.setSeconds(0)
  date.setMinutes(0)
  date.setHours(0)
  return date.getTime()
}
// 获取一天的结束时间
export function getEndOfOneDate(date) {
  if (!date) date = new Date()
  if (!date.getTime) {
    date = new Date(date)
  } else {
    date = new Date(date.getTime())
  }
  date.setMilliseconds(999)
  date.setSeconds(59)
  date.setMinutes(59)
  date.setHours(23)
  if (date.getTime() > new Date().getTime()) {
    return new Date().getTime()
  } else {
    return date.getTime()
  }
}
// 获取季度的开始时间
export function getStartOfOneReason(year, reason) {
  // let [month, date] = [0, new Date(year)]
  let month = 0
  const date = new Date(year)
  switch (reason) {
    case 1:
      month = 0
      break
    case 2:
      month = 3
      break
    case 3:
      month = 6
      break
    case 4:
      month = 9
      break
  }
  date.setMonth(month)
  return getStartOfOneMonth(date)
}
// 获取季度的结束时间
export function getEndOfOneReason(year, reason) {
  // let [month, date] = [0, new Date(year)]
  let month = 0
  const date = new Date(year)
  switch (reason) {
    case 1:
      month = 2
      break
    case 2:
      month = 5
      break
    case 3:
      month = 8
      break
    case 4:
      month = 11
      break
  }
  date.setMonth(month)
  if (date.getTime() > new Date().getTime()) {
    return new Date().getTime()
  } else {
    return date.getTime()
  }
}

// 获取某年的开始时间
export function getStartOfOneYear(year) {
  const [month, date] = [1, new Date(year)]
  date.setMonth(month)
  return getStartOfOneMonth(date)
}
// 获取某年的结束时间
export function getEndOfOneYear(year, reason) {
  const [month, date] = [12, new Date(year)]
  date.setMonth(month)
  return getEndOfOneMonth(date)
}
