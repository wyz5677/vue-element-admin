import {
  asyncRoutes,
  constantRoutes
} from '@/router'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    // 如果用户有这个权限就返回true 否则返回false
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    // 如果没有源信息 说明是可以显示的 所以也true
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表(把roles和asyncRoutes中的meta中的roles去对比)
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []

  routes.forEach(route => {
    // 深拷贝
    const tmp = {
      ...route
    }
    // 如果是匹配的话 就往res中加路由
    if (hasPermission(roles, tmp)) {
      // 递归
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

const permission = {
  state: {
    routes: [],
    addRoutes: []
  },
  mutations: {
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes
      state.routes = constantRoutes.concat(routes)
    }
  },
  actions: {
    GenerateRoutes({
      commit
    }, data) {
      return new Promise(resolve => {
        const {
          roles
        } = data
        let accessedRoutes
        if (roles.includes('admin')) {
          // 把路由中需要权限加载的页面赋值给accessedRoutes 也就是说amin拥有所有权限
          accessedRoutes = asyncRoutes
        } else {
          // 递归过滤异步路由表，返回符合用户角色权限的路由表
          accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
        }
        // 把路由表存到vuex
        commit('SET_ROUTES', accessedRoutes)
        resolve(accessedRoutes)
      })
    }
  }
}
// 导出 store
export default permission
