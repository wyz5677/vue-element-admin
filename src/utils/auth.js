// cookie中存取删除token

// 为了保证安全性，我司现在后台所有token有效期(Expires/Max-Age)都是Session，
// 就是当浏览器关闭了就丢失了。重新打开游览器都需要重新登录验证，
// 后端也会在每周固定一个时间点重新刷新token，让后台用户全部重新登录一次，
// 确保后台用户不会因为电脑遗失或者其它原因被人随意使用账号。

import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
