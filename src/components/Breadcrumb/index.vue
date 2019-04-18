<template>
  <!-- el-breadcrumb标签中设置它来决定分隔符，它只能是字符串，默认为斜杠/ -->
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <!-- v-for渲染需要使用transition-group-->
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
        <!-- 这里就是约定好的配置项 如果当前项的redirect设置了noredirect或者是最后一项那么此面包屑就不可以被点击-->
        <span v-if="item.redirect==='noredirect'||index==levelList.length-1" class="no-redirect">
          {{ generateTitle(item.meta.title) }}
        </span>
        <!-- 否则就是可点击的,需要语言种类格式化 -->
        <a v-else @click.prevent="handleLink(item)">{{ generateTitle(item.meta.title) }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
// 这是面包屑部分
// 1.面包屑是通过watch路由变化动态生成.
// 2.面包屑如果设置了配置项或者是最后一项那么就不能被点击,不然就是可以被点击的
// 3.面包屑的等级是从this.$route.matched里面过滤来的,每项的meta.title就是面包屑显示的内容
// 4.点击面包屑跳转,如果有重定向就跳转到重定向页面,不然就需要处理

// 这个是生成不同语言标题的方法
import { generateTitle } from '@/utils/i18n'
import pathToRegexp from 'path-to-regexp'

export default {
  data() {
    return {
      levelList: null
    }
  },
  watch: {
    // 通过 watch $route 变化动态生成的
    $route() {
      this.getBreadcrumb()
    }
  },
  // 刚进入页面调用此方法获得面包屑数据
  created() {
    this.getBreadcrumb()
  },
  methods: {
    generateTitle,
    getBreadcrumb() {
      // filter返回满足条件(这里是满足 item.name存在的项)的所有元素组成一个数组
      console.log('this.$route-', this.$route)
      let matched = this.$route.matched.filter(item => item.name)
      console.log('matched', matched)
      const first = matched[0]
      // 如果第一个元素不是的name不是dashborad
      if (first && first.name.trim().toLocaleLowerCase() !== 'Dashboard'.toLocaleLowerCase()) {
        // 就在matched中拼接上dashboard
        matched = [{ path: '/dashboard', meta: { title: 'dashboard' }}].concat(matched)
      }
      // 过滤出面包屑等级
      this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
      console.log(this.levelList, this.levelList[0].meta.breadcrumb)
    },
    pathCompile(path) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      console.log(1111)
      const { params } = this.$route
      console.log('this.$route--', this.$route)
      var toPath = pathToRegexp.compile(path)
      return toPath(params)
    },
    // 点击
    handleLink(item) {
      const { redirect, path } = item
      console.log('item--', item)
      // 如果有重定向就跳转到重定向页面 并跳出
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      // 不然跳转到params页面
      this.$router.push(this.pathCompile(path))
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 8px;
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
</style>
