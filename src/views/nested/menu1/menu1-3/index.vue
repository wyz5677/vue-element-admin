<!--研究native的原理-->
<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="menu 1-3" type="success" />
    <!-- <native @on-click="handleClick" /> -->
    <!-- <native @click.native="handleClick" /> -->
    <button @click="handleClick">123</button>
    <native ref="native" />
  </div>
</template>
<script>
import native from '@/components/native'
export default {
  provide: {
    name: 'Aresn'
  },
  components: {
    native
  },
  methods: {
    handleClick() {
      // this.$refs.native.handleClick()
      console.log(this.$children)
      this.$children[1].handleClick()
    }
  }
}
</script>
