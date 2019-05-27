<template>
  <div class="main">
    <DragAround>
      <div slot="leftContent">我是左边内容</div>
      <div slot="rightContent">我是右边的</div>
    </DragAround>
  </div>
</template>
<script>
/**
   * @namespace components/showFromRight/demo
   */
import DragAround from './index'
export default {
  name: 'GlobalLoddingDemo',
  components: {
    DragAround
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.main {
    height: 600px;
}
</style>
