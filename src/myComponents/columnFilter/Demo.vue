<!--Created by 姜汉宝 on 2018/11/6.-->
<template>
  <el-row class="column-filter-demo" type="flex">
    <ColumnFilter v-model="checkList" :options="options" />
    <div class="res">
      <div>选择了以下列</div>
      <div v-for="(item, index) in checkList" :key="index">{{ getColumnName(item) }}</div>
    </div>
  </el-row>
</template>

<script>
import ColumnFilter from './index'
export default {
  name: 'Demo',
  components: {
    ColumnFilter
  },
  data() {
    return {
      checkList: ['name'],
      options: [
        {
          label: '姓名',
          value: 'name'
        },
        {
          label: '年龄',
          value: 'age'
        }
      ]
    }
  },
  methods: {
    getColumnName(item) {
      const column = this.options.find((val) => { return val.value === item })
      return column ? column.label : ''
    }
  }
}
</script>

<style scoped>
.column-filter-demo{
  padding-top: 60px;
  padding-left: 230px;
}
  .res{
    padding-left: 80px;
  }
</style>
