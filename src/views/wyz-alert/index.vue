<!--研究全局提示组件——$Alert

methods: {
  handleShow () {
    this.$Alert({
      content: '这是一条提示信息',
      duration: 3
    })
  }
}
this.$Alert 可以在任何位置调用，无需单独引入。该方法接收两个参数：

content：提示内容；
duration：持续时间，单位秒，默认 1.5 秒，到时间自动消失。
-->
<template>
  <div class="alert">
    <div v-for="item in notices" :key="item.name" class="alert-main">
      <div class="alert-content">{{ item.content }}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      notices: []
    }
  }
}
</script>
<style>
  .alert{
    position: fixed;
    width: 100%;
    top: 16px;
    left: 0;
    text-align: center;
    pointer-events: none;
  }
  .alert-content{
    display: inline-block;
    padding: 8px 16px;
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
    margin-bottom: 8px;
  }
</style>
