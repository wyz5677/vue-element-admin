// 前端请求流程
// 在 vue-element-admin 中，一个完整的前端 UI 交互到服务端处理流程是这样的：

// UI 组件交互操作；
// 调用统一管理的 api service 请求函数；
// 使用封装的 request.js 发送请求；
// 获取服务端返回；
// 更新 data；
// 从上面的流程可以看出，为了方便管理维护，统一的请求处理都放在 @/src/api 文件夹中，并且一般按照 model 纬度进行拆分文件

// @/src/utils/request.js 是基于 axios 的封装
import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/login/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

