<template>
  <div class="tabList-demo">
    <tab-list :tab-list-array="subs" :default-tab="defaultTab" @tabClick="tabClick" />
    <div v-if="tabShow==='疾风剑豪'" class="tabContent">1</div>
    <div v-if="tabShow==='卡尔'" class="tabContent2">2</div>
  </div>
</template>
<script>
/**
   * @namespace components/showFromRight/demo
   */
import tabList from './index'
export default {
  name: 'GlobalLoddingDemo',
  components: {
    tabList
  },
  data() {
    return {
      subs: [{ label: 'hasagi', name: '疾风剑豪' }, { label: 'kael', name: '卡尔' }],
      defaultTab: 'kael',
      tabShow: '1'
    }
  },
  methods: {
    tabClick(val) {
      console.log(val)
      this.tabShow = val.name
    }
  }
}
</script>

<style scoped>
.tabList-demo{
  height: calc(100%);
  background: #f2f2f2;
}
.tabContent {
    width: 200px;
    height: 200px;
    background: green;
    margin-left: 40px
}
.tabContent2 {
    width: 200px;
    height: 200px;
    background: yellow;
    margin-left: 40px
}
</style>
