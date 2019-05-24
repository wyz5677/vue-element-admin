<!--Created by 李才洋 on 2018/12/6.-->
<template>
  <ul class="tab-list-container">
    <li v-for="(item, index) in tabListArray" :key="index" :class="{'current-tab': show === item.label}" @click="tabClick(item)">{{ item.name }}</li>
  </ul>
</template>

<script>
export default {
  name: 'TabList',
  /**
   * @prop {Object[]} tabListArray - tab数据
   * @prop {String} defaultTab - 默认选中tab
   */
  props: {
    tabListArray: {
      type: Array,
      default: () => ([])
    },
    defaultTab: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      show: ''
    }
  },
  created() {
    // 如果没有设定默认值
    if (this.defaultTab === '') {
      if (this.tabListArray.length) this.tabClick(this.tabListArray[0])
    } else {
      const obj = this.tabListArray.filter((item) => (item.label === this.defaultTab))
      if (obj.length) this.tabClick(obj[0])
    }
  },
  methods: {
    tabClick(val) {
      this.show = val.label
      this.$emit('tabClick', val)
    }
  }
}
</script>

<style lang="less" scoped>
// 标签页列表样式
.tab-list-container {
  margin-bottom: 0px;
  .current-tab, li:hover {
    background-color: #fff;
    color: #29A1F7;
    border-top: 3px solid #29A1F7;
    border-bottom: 1px solid #f2f2f2;
    font-weight: bold;
  }
  li {
    list-style: none;
    color: #222;
    background-color: #DADADA;
    border-top: 3px solid #DADADA;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    font-size: 14px;
    /*width: 100px;*/
    padding: 0 16px;
    height: 40px;
    line-height: 35px;
    float: left;
    text-align: center;
    cursor: pointer;
    box-sizing: border-box;
  }
  li + li {
    margin-left: 8px;
  }
  width: 100%;
  height: 40px;
}
</style>
