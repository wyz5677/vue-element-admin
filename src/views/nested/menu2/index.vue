<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="menu 2" />
    <vModel v-model="value" disabled />{{ value }}
  </div>
</template>
<script>
import vModel from '@/components/vModel'
export default {
  components: {
    vModel
  },
  data() {
    return {
      value: 1
    }
  },
  watch: {
  },
  methods: {
  }
}
</script>
<!--自定义组件的语法糖 v-model 的实现-->
