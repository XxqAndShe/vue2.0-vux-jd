import { querystring } from 'vux'
import Vue from 'vue'
import { setTimeout } from 'timers'

export function parseTime (time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  return format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
}

export function formatMessageTime (time) {
  const onDay = 1000 * 60 * 60 * 24
  const today = new Date(parseTime(new Date(), '{y}-{m}-{d}') + ' ' + '00:00:00')
  if (today - time > 0) {
    if (today - time < onDay) {
      return '昨天' + ' ' + parseTime(time, '{h}:{i}:{s}')
    } else {
      return parseTime(time, '{y}-{m}-{d} {h}:{i}:{s}')
    }
  } else {
    return parseTime(time, '{h}:{i}:{s}')
  }
}

// 倒计时
export function countDown (n, cb, context) {
  cb && cb(n)
  setTimeout(() => {
    n > 0 && !context._isDestroyed && countDown(--n, cb, context)
  }, 1000)
}

export function param (data) {
  return querystring.stringify(data)
}

// 简单表单验证
export function validate (rules, data, noMsg) {
  for (let key in data) {
    // 对应key的验证规则
    let rule = rules[key]
    if (!rule) {
      continue
    }
    for (let v of rule) {
      if ((v.required && !data[key]) || (v.validator && !v.validator(data[key]))) {
        !noMsg && Vue.$vux.toast.text(v.msg)
        return Promise.resolve(false)
      }
    }
  }
  return Promise.resolve(true)
}

// 加载
export function loadPlugin (url, pluginName) {
  if (window[pluginName]) {
    return Promise.resolve(window[pluginName])
  }
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = url
    script.onload = function () {
      testPlugin()
    }
    /* eslint-disable */
    script.onerror = function () {
      reject()
    }
    /* eslint-enable */
    document.getElementsByTagName('head')[0].appendChild(script)
    function testPlugin () {
      const plugin = window[pluginName]
      if (plugin) {
        resolve(plugin)
      } else {
        setTimeout(() => {
          testPlugin()
        }, 50)
      }
    }
  })
}
