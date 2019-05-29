// 权限控制挂载在main.js中

import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // 拿到Token

// 想禁用进度环？设置 showSpinner 为 false。
NProgress.configure({ showSpinner: false }) // NProgress Configuration

// 权限判断方法
function hasPermission(roles, permissionRoles) {
  if (roles.includes('admin')) return true // admin permission passed directly
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

const whiteList = ['/login', '/auth-redirect'] // 不会重定向的白名单

// 全局前置守卫
router.beforeEach((to, from, next) => {
  NProgress.start() // 开始进度条执行
  // 权限验证：通过token获取用户对应的 role，动态根据用户的 role 算出其对应有权限的路由，通过 router.addRoutes 动态挂载这些路由。
  if (getToken()) {
    // 确定是否有令牌

    /* has token*/
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done() // 如果当前页面是仪表盘，每个钩子都不会触发，所以手动处理它
    } else {
      if (store.getters.roles.length === 0) {
        // 判断当前用户是否已拉取完user_info信息 如果没有拉取用户信息 就去拉取
        store
          .dispatch('GetUserInfo')
          .then(res => {
            // 拉取user_info
            console.log('res-------', res)
            const roles = res.data.roles //  但是roles是['admin']     note: roles must be a object array! such as: [{id: '1', name: 'editor'}, {id: '2', name: 'developer'}]
            // 传递的时候居然也可以解构.
            store.dispatch('GenerateRoutes', { roles }).then(accessRoutes => {
              // 根据roles权限生成可访问的路由表
              router.addRoutes(accessRoutes) // 动态添加可访问路由表
              next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
            })
          })
          .catch(err => {
            store.dispatch('FedLogOut').then(() => {
              Message.error(err)
              next({ path: '/' })
            })
          })
      } else {
        // 如果没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
        // roles: ["admin", __ob__: Observer]
        if (hasPermission(store.getters.roles, to.meta.roles)) {
          next()
        } else {
          // 设置 replace 属性的话，当点击时，会调用 router.replace() 而不是 router.push()，于是导航后不会留下 history 记录。
          next({ path: '/401', replace: true, query: { noGoBack: true }})
        }
        // 可删 ↑
      }
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      next()
    } else {
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
      NProgress.done() // 如果当前页面是登录后不会触发每个钩子，所以手动处理它
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 完成进度条
})
