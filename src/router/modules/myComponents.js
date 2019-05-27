/** When your routing table is too long, you can split it into small modules**/
// 动态表格路由

import Layout from '@/views/layout/Layout'

const myComponentsRouter = {
  path: '/myComponents',
  component: Layout,
  redirect: 'noredirect',
  name: 'myComponentDemo',
  meta: {
    title: 'myComponents',
    icon: 'people'
  },
  children: [
    {
      // 右边侧拉框组件
      path: 'showFromRight',
      component: () => import('@/myComponents/showFromRight/demo'),
      name: 'showFromRightDemo',
      meta: { title: 'showFromRight' }
    },
    {
      // 右边侧拉框组件
      path: 'tabLit',
      component: () => import('@/myComponents/tabList/demo'),
      name: 'tabLitDemo',
      meta: { title: 'tabLit' }
    },
    {
      // 拖拽框组件
      path: 'DragAround',
      component: () => import('@/myComponents/DragAround/demo'),
      name: 'DragAroundDemo',
      meta: { title: 'DragAround' }
    },
    {
      // 过滤器组件
      path: 'columnFilter',
      component: () => import('@/myComponents/columnFilter/demo'),
      name: 'columnFilterDemo',
      meta: { title: 'columnFilter' }
    },
    {
      // 全屏组件
      path: 'screenFullTwo',
      component: () => import('@/myComponents/screenFullTwo/demo'),
      name: 'screenFullTwoDemo',
      meta: { title: 'screenFullTwo' }
    },
    {
      // 全屏组件
      path: 'horizontalScroll',
      component: () => import('@/myComponents/horizontalScroll/demo'),
      name: 'horizontalScrollDemo',
      meta: { title: 'horizontalScroll' }
    },
    {
      // 全屏加载组件
      path: 'GlobalLoading',
      component: () => import('@/myComponents/GlobalLoading/demo'),
      name: 'GlobalLoadingDemo',
      meta: { title: 'GlobalLoading' }
    }
  ]
}
export default myComponentsRouter
