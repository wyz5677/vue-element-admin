<template>
  <div>
    <el-button @click="open">显示loading, 3s后自动消失</el-button>
    <loading :show="showLoading" />
  </div>
</template>
<script>
/**
 * @namespace components/loading/demo
 */
import loading from '@/myComponents/GlobalLoading'

export default {
  name: 'GlobalLoddingDemo',
  components: {
    loading
  },
  data() {
    return {
      showLoading: false
    }
  },
  mounted() {
    this.open()
  },
  methods: {
    close() {
      this.showLoading = false
    },
    open() {
      this.showLoading = true
      setTimeout(() => { this.showLoading = false }, 3000)
    }
  }
}
</script>

<style scoped>

</style>
