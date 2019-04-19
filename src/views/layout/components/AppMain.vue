<template>
  <!-- section 不是一个专用来做容器的标签，如果仅仅是用于设置样式或脚本处理，专用的是 div
  section 里应该有 标题（h1~6），但文章中推荐用 article 来代替
  一条简单的准则是，只有元素内容会被列在文档大纲中时，才适合用section元素。
  section的作用是对页面上的内容进行分块，如各个有标题的版块、功能区或对文章进行分段，不要与有自己完整、独立内容的article混淆 -->
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <!-- 这里在 app-main 外部包了一层 keep-alive 主要是为了缓存 <router-view> 的，配合页面的 tabs-view 标签导航使用，如不需要可自行去除。 -->
      <!-- 顶部标签栏导航实际作用相当于 nav 的另一种展现形式，其实说白了都是一个个 router-link，点击跳转到相应的页面。然后我们在来监听路由 $route 的变化，来判断当前页面是否需要重新加载或者已被缓存。 -->
      <!-- include: 字符串或正则表达式。只有匹配的组件会被缓存。 include 默认是优先匹配组件的 name -->
      <keep-alive :include="cachedViews">
        <!-- 主题内容显示在这 -->
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
      // 实际 keep-alive 的路由。可以在配置路由的时候通过 meta.noCache 来设置是否需要缓存这个路由 默认都缓存
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      // 只要保证 key 唯一性就可以了，保证不同页面的 key 不相同 这是对Different router the same component vue的处理
      return this.$route.fullPath
    }
  }
}
</script>

<style scoped>
.app-main {
  /*84 = navbar + tags-view = 50 +34 */
  min-height: calc(100vh - 84px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>

