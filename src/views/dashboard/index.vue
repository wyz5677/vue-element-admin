<!--Dashboard 仪表盘的意思
根据不同的用户切换不同的组件显示
-->
<template>
  <div class="dashboard-container">
    <!-- Vue.js 提供了另外一个内置的组件 <component> 和 is 特性，可以更好地实现动态组件。Vue.js 提供了另外一个内置的组件 <component> 和 is 特性，可以更好地实现动态组件。 -->
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminDashboard from './admin'
import editorDashboard from './editor'

export default {
  name: 'Dashboard',
  components: { adminDashboard, editorDashboard },
  data() {
    return {
      // 这里的 is 动态绑定的是一个String，除了直接绑定一个String，比如标签名、组件名，还可以是一个 Object。
      // currentRole: 'adminDashboard'
      currentRole: adminDashboard
    }
  },
  computed: {
    // this.$store.getters.roles  监听人物的变化
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    // 如果不是admin账号 就渲染
    if (!this.roles.includes('admin')) {
      this.currentRole = 'editorDashboard'
    }
  }
}
</script>
