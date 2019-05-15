<template>
  <div class="show-from-right" :style="{width: width, height: height, top: top}" :class="{show: showFlag, hidden: !showFlag}">
    <i class="el-icon-close" @click="toHidden" />
    <slot />
  </div>
</template>

<script>
/**
   * 右侧滑出component
    * @author 姜汉宝
   * @module component-showFromRight
   * @example
   * 点击下方链接查看demo：{@link components/showFromRight/demo.vue}
   * 页面效果：'/demo.html/#/ShowFromRight'
  */
export default {
  name: '',
  /**
   * @prop {Boolean} [value = flag] - 弹窗的显示状态
   * @prop {String} [top = 0] - 距离顶部的间距
   * @prop {String} [width = initial] - 宽度(像素字符串或者百分比)
   * @prop {String} [height = calc(100%)] - 高度(像素字符串或者百分比)
   */
  props: {
    value: {
      type: Boolean,
      default: false
    },
    top: {
      type: String,
      default: '0'
    },
    width: {
      type: String,
      default: 'initial'
    },
    height: {
      type: String,
      default: 'calc(100%)'
    }
  },
  data() {
    return {
      showFlag: false
    }
  },
  watch: {
    value() {
      this.showFlag = this.value
    },
    showFlag(val) {
      this.$emit('input', val)
    }
  },
  created() {
    this.showFlag = this.value
  },
  methods: {
    toHidden() {
      this.$emit('toHidden')
    },
    /**
     * 显示内容
     * @function show
     */
    show() {
      this.showFlag = true
      this.$emit('open')
    },
    /**
     * @fires close
     * @function hidden
     */
    hidden() {
      /**
       * 隐藏内容
       * @event close
       * @type undefined
       */
      this.showFlag = false
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
  .show-from-right{
    background-color: #fff;
    cursor: pointer;
    overflow: auto;
    border: solid 1px #ccc;
    box-sizing: border-box;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1000;
    transition: all 0.5s;
    padding: 10px;
  }
  .show-from-right.hidden{
    transform: translateX(100%);
  }
  .show-from-right.show{
    transform: translateX(0);
  }
  .el-icon-close{
    position: absolute;
    right: 5px;
    top: 5px;
    font-size: 18px;
    z-index: 1001;
    color: #8bc1f2;
  }
</style>
