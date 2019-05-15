<template>
  <div class="showFromRight-demo">
    <el-button @click="show">显示</el-button>
    <el-button @click="hidden">隐藏</el-button>
    <!-- v-model不管写什么都是传递给子组件的value -->
    <showFromRight ref="showFromRight" v-model="togglePanelFlag" width="300px" height="790px" @toHidden="hiddenPanel">
      <div>编辑</div>
      <div>
        三菱电机发送附件哦i韦杰夫
        sfjowejfwsdfjowefjwsdfw
        是否为
        是否为
        wefwecwerwcerwr
        圣诞氛围二位
      </div>
    </showFromRight>
  </div>
</template>
<script>
/**
   * @namespace components/showFromRight/demo
   */
import showFromRight from './index'
export default {
  name: 'GlobalLoddingDemo',
  components: {
    showFromRight
  },
  data() {
    return {
      togglePanelFlag: true
    }
  },
  methods: {
    show() {
      this.$refs['showFromRight'].show()
    },
    hidden() {
      this.$refs['showFromRight'].hidden()
    },
    hiddenPanel() {
      this.$refs['showFromRight'].hidden()
    }
  }
}
</script>

<style scoped>
.showFromRight-demo{
  height: calc(100%)
}
</style>
