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
    }
  ]
}
export default myComponentsRouter
