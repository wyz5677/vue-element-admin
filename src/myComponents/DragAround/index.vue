<!--Created by 万奕舟 侧拉框组件 -->
<template>
  <div ref="slider_container" class="slider-container">
    <div ref="slider_left" class="slider-left">
      <slot name="leftContent">搜索条件区域</slot>
    </div>
    <div v-show="scrollShow" ref="slider_contr" class="slider-contr" @mousedown="handleSliderChange">
      <i :class="isRight?'el-icon-caret-left':'el-icon-caret-right'" @click="change" />
    </div>
    <div ref="slider_right" class="slider-right">
      <slot name="rightContent">搜索条件区域</slot>
    </div>
  </div>
</template>

<style scoped>
.slider-container {
  display: flex;
  height: 100%;
  /* height: 1000px; */
  position: relative;
  width: 100%;
}
.slider-left,
.slider-contr,
.slider-right {
  height: 100%;
  overflow: hidden;
}
.slider-right {
  width: 300px;
}
.slider-left {
  flex: 1;
}
.slider-contr {
  width: 20px;
  cursor: w-resize;
  border: 1px solid #cccccc;
  background-color: #fff;
}
.slider-contr i {
  top: 50%;
  margin: 0 0 0 -5px;
  transform: translate(0, -50%);
  position: absolute;
}
.el-icon-caret-left,
.el-icon-caret-right {
  font-size: 30px;
  margin-top: 160px;
  margin-left: 5px;
  cursor: pointer;
}
</style>

<script>
export default {
  // props: ['fullRight', 'fullLeft', 'leftLimit'],
  props: {
    fullRight: {
      type: Boolean
    },
    fullLeft: {
      type: Boolean
    },
    leftLimit: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isRight: false,
      scrollShow: true,
      IT: 0
    }
  },
  watch: {
    scrollShow: {
      immediate: true,
      handler(val) {
        this.$emit('scrollShowChange', val)
      }
    }
  },
  mounted() {
    this.isfullRight()
    this.isfullLeft()
  },
  methods: {
    scrollHide() {
      this.scrollShow = false
    },
    typeOne() {
      const leftE = this.$refs.slider_left
      const contE = this.$refs.slider_contr
      const contain = this.$refs.slider_container
      const rightE = this.$refs.slider_right
      contE.style.right = '300px'
      rightE.style.width = contE.style.right
      leftE.style.width = contain.clientWidth - 300 + 'px'
      this.scrollShow = true
    },
    typeTwo() {
      const leftE = this.$refs.slider_left
      const contE = this.$refs.slider_contr
      const contain = this.$refs.slider_container
      const rightE = this.$refs.slider_right
      leftE.style.width = contE.style.left = '0px'
      rightE.style.width = contain.offsetWidth + 'px'
      this.scrollHide()
    },
    // 左边铺满
    typeThree() {
      const rightE = this.$refs.slider_right
      // 右边元素的宽度为0
      rightE.style.width = '0px'
      this.scrollHide()
    },
    isfullRight() {
      if (this.fullRight === true) {
        this.typeTwo()
      }
    },
    isfullLeft() {
      if (this.fullLeft === true) {
        this.typeThree()
      }
    },
    handleSliderChange(e) {
      const contE = this.$refs.slider_contr
      const contain = this.$refs.slider_container
      const rightE = this.$refs.slider_right
      // 获取鼠标相对浏览器页面的水平坐标
      const disX = (e || event).clientX
      // 线相对父元素的水平坐标
      contE.left = contE.offsetLeft
      // 如果线到了右边顶部 就不能移动
      if (rightE.style.width !== '0px') {
        document.onmousemove = (e) => {
          // 获得线相对父元素的水平坐标
          let iT = contE.left + ((e || event).clientX - disX)
          // 获取最大的拉动距离 限制距离
          const maxT = contain.clientWidth - contE.offsetWidth - 300
          contE.style.margin = 0
          if (this.leftLimit !== 0) {
            this.IT = this.leftLimit
          } else {
            // 定义左边默认初始百分比为百分之40
            this.IT = contain.clientWidth * 0.4
          }
          // 线左边的限制 如果左边满足 才会执行右边
          iT < this.IT && (iT = this.IT)
          //  线到右边的限制
          iT > maxT && (iT = maxT)
          // 右边盒子的宽度为总盒子的宽度减去线相对父元素的水平坐标再减去线的宽度
          rightE.style.width = contain.clientWidth - iT - contE.offsetWidth + 'px'
        }
      }
      document.onmouseup = function() {
        document.onmousemove = null
        document.onmouseup = null
        contE.releaseCapture && contE.releaseCapture()
      }
      return false
    },
    change() {
      const leftE = this.$refs.slider_left
      const contE = this.$refs.slider_contr
      const contain = this.$refs.slider_container
      const rightE = this.$refs.slider_right
      // 如果线到了右边顶部
      if (rightE.style.width === '0px') {
        // 线的right为左边元素的宽度
        contE.style.right = '300px'
        rightE.style.width = contE.style.right
        leftE.style.width = contain.clientWidth - 300 + 'px'
        this.isRight = false
        contE.style.cursor = 'w-resize'
      } else {
        // 线的left为左边元素的宽度
        contE.style.left = contain.clientWidth - contE.clientWidth + 'px'
        // 右边元素的宽度为0
        rightE.style.width = '0px'
        leftE.style.width = contain.clientWidth - contE.clientWidth + 'px'
        this.isRight = true
        // 如果点到右边顶部 那么就把鼠标变成普通样式
        contE.style.cursor = 'default'
      }
    }
  }
}
</script>
