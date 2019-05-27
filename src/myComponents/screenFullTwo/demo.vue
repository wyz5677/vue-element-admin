<template>
  <div ref="ab" class="Screenfull-demo">
    <screenFullTwo :screenfull-obj="screenfullObj" />
    <div>
      sdfjsodfjwoejfowjer
    </div>
  </div>
</template>

<script>
import screenFullTwo from '@/myComponents/screenFullTwo'
/**
 * @namespace components/screenFull/demo
 */
export default {
  name: 'DemoScreenFull',
  components: {
    screenFullTwo
  },
  data() {
    return {
      screenfullObj: null
    }
  },
  mounted() {
    this.screenfullObj = this.$refs['ab']
  }
}
</script>

<style lang="scss" scoped>
  .Screenfull-demo {
    background-color: #fff;
    position: relative;
    height: calc(100%)
  }
</style>
