<template>
  <div class="app-scroll">
    <ScrollPane class="scroll-container">
      <ul>
        <li v-for="(item,index) in data" :key="index">{{ item }}</li>
      </ul>
    </ScrollPane>
  </div>
</template>

<script>
import ScrollPane from '@/myComponents/horizontalScroll'
/**
 * @namespace components/horizontalScroll/demo
 */
export default {
  name: 'DemoScroll',
  components: {
    ScrollPane
  },
  data() {
    return {
      data: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      for (let i = 0; i < 50; i++) {
        this.data.push(`今天去南极 + ${i}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .app-scroll{
    width: 100%;
    // height: 100%;
    height: 1000px;
  }
  .scroll-container{
    height: 100%;
    width: 100%;
    ul{
      li{
        display: inline-block;
        margin-right: 10px;
        padding: 2px 4px;
        background-color: aquamarine;
      }
    }
  }
</style>
