<template>
  <span class="screenfull-svg" :class="{'isFullscreen': isFullscreen}" @click="click">
    <i class="icon iconfont" :class="[isFull ? 'icon-quanping_' : 'icon-quanping', colorType]" />
  </span>
</template>

<script>
// import screenfull from 'screenfull'
/**
 * 全屏组件
 * @author 姜汉宝
 * @module component-screenFull
 * @example 点击下方链接查看demo：{@link components/screenFull/demo.vue}
 * 页面效果：'/demo.html/#/screenFull'
 */
const enabled = document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled
let exitFun = 'exitFullscreen'
if (document.webkitExitFullscreen) exitFun = 'webkitExitFullscreen'
if (document.mozCancelFullScreen) exitFun = 'mozCancelFullScreen'
if (document.msExitFullscreen) exitFun = 'msExitFullscreen'
export default {
  name: 'Screenfull',
  /**
   * @prop { HEMlElement} [screenfullObj = undefined] - 需要全屏显示的html元素对象，若不传则全屏显示整个页面
   */
  props: {
    // overView: {
    //   type: String,
    //   default:
    // },
    screenfullObj: {
      // 这里不知道给什么类型好
      type: HTMLDivElement,
      required: true
    },
    colorType: {
      type: String,
      default: 'screenfull-withe'
    },
    color: {
      type: String,
      default: '#666'
    },
    backgroundColor: {
      type: String,
      default: '#fff'
    }
  },
  data() {
    return {
      isFull: false
    }
  },
  computed: {
    style() {
      return `
        color: ${this.color};
        background-color: ${this.backgroundColor};
      `
    }
  },
  watch: {
    screenfullObj() {
      this.screenfullObj.onwebkitfullscreenchange = (val) => {
        if (val) this.isFull = document.webkitIsFullScreen
        // console.log('this.isFull', this.isFull)
      }
    },
    isFull(val) {
      this.$emit('change', val)
    }
  },
  mounted() {
    // 监听esc键 控制全屏状态
    // window.onresize = () => {
    //   this.$nextTick(() => {
    //     if (!this.checkFull()) {
    //       this.isFull = false
    //     }
    //   })
    // }
  },
  methods: {
    // checkFull () {
    //   console.log(document.fullscreenEnabled, window.fullScreen, document.webkitIsFullScreen, document.msFullscreenEnabled)
    //   let isFull = document.fullscreenEnabled || window.fullScreen || document.webkitIsFullScreen || document.msFullscreenEnabled
    //   if (isFull === undefined) { isFull = false }
    //   return isFull
    // },
    // 全屏方法
    fullScreen(el) {
      if (el) {
        el.webkitRequestFullscreen && el.webkitRequestFullscreen()
        el.mozRequestFullScreen && el.mozRequestFullScreen()
        el.msRequestFullscreen && el.msRequestFullscreen()
        el.requestFullscreen && el.requestFullscreen()
      } else {
        document.requestFullscreen()
      }
    },
    isFullscreen() {
      if (document.webkitIsFullScreen) return document.webkitIsFullScreen
      if (document.mozFullScreen) return document.mozFullScreen
    },
    click() {
      if (!enabled) {
        this.$message({
          message: 'you browser can not work',
          type: 'warning'
        })
        return false
      }
      if (this.screenfullObj) {
        if (!this.isFullscreen()) {
          this.fullScreen(this.screenfullObj)
          this.isFull = true
        } else {
          document[exitFun]()
          this.isFull = false
        }
      } else {
        if (!this.isFullscreen()) {
          this.fullScreen()
          this.isFull = true
        } else {
          document[exitFun]()
          this.isFull = false
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
  .screenfull-svg {
    color: #666;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1;
    cursor: pointer;
    &.isFullscreen{
      position: absolute;
      z-index: 3;
    }
  }
  .iconfont {
    display: inline-block;
    text-align: center;
    line-height: 28px;
    font-size: 20px;
    padding: 0 4px;
    cursor: pointer;
    border-radius: 2px;
    box-sizing: border-box;
    width: 30px;
    height: 30px;
    &.screenfull-withe {
      background-color: #ffffff;
      color: #666666;
      border: solid 1px #ccc;
      box-shadow:1px 2px 5px 0 rgba(183,183,184,0.49);
    }
    &.screenfull-black {
      background-color: #050946;
      color: #D0E6FE;
      border: solid 1px #6A98D4;
      box-shadow:1px 2px 5px 0 rgba(5,85,174,0.6);
    }
  }
</style>
